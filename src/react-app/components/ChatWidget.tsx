import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router';
import { Bot, X, Send, Sparkles, MessageCircle, Mail } from 'lucide-react';

/**
 * Floating assistant. Guides a visitor through a short conversation, collects
 * their project details, then hands the lead off to WhatsApp (pre-filled) so
 * Nikhil is notified instantly. No backend required — works on static hosting.
 */

const WHATSAPP_NUMBER = '918937879361';
const EMAIL = 'kosinikhilkhand@gmail.com';

type From = 'bot' | 'user';
interface Msg { from: From; text: string }
interface Option { label: string; value?: string; to?: string }
type Mode = 'chips' | 'input' | 'final';
type Stage = 'start' | 'service' | 'details' | 'name' | 'done';

const START_OPTIONS: Option[] = [
  { label: 'Start a project', value: 'start_project' },
  { label: 'What can you build?', value: 'capabilities' },
  { label: 'Just saying hi', value: 'hi' },
];

const SERVICE_OPTIONS = [
  'Website / Web App',
  'Shopify Store',
  'WordPress Site',
  'Booking / Payments',
  'AI Chatbot / AI',
  'Automation',
  'Networking / Hyper-V',
  'SonicWall / Security',
  'IoT Setup',
  'Something else',
];

const GREETING = "Hi! 👋 I'm Nikhil's assistant. Looking to build a website, app, store or something with AI? I can help — and pass your project straight to Nikhil.";

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [showTeaser, setShowTeaser] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([{ from: 'bot', text: GREETING }]);
  const [options, setOptions] = useState<Option[]>(START_OPTIONS);
  const [mode, setMode] = useState<Mode>('chips');
  const [stage, setStage] = useState<Stage>('start');
  const [typing, setTyping] = useState(false);
  const [input, setInput] = useState('');
  const [data, setData] = useState<{ service: string; details: string; name: string }>({
    service: '',
    details: '',
    name: '',
  });

  const scrollRef = useRef<HTMLDivElement | null>(null);
  const timer = useRef<number | undefined>(undefined);

  // One-time teaser bubble to invite the visitor.
  useEffect(() => {
    const t = window.setTimeout(() => setShowTeaser(true), 4500);
    return () => window.clearTimeout(t);
  }, []);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' });
  }, [messages, typing, mode]);

  useEffect(() => () => window.clearTimeout(timer.current), []);

  const botSay = (text: string, opts: Option[], nextMode: Mode, nextStage?: Stage) => {
    setTyping(true);
    setOptions([]);
    timer.current = window.setTimeout(() => {
      setTyping(false);
      setMessages((m) => [...m, { from: 'bot', text }]);
      setOptions(opts);
      setMode(nextMode);
      if (nextStage) setStage(nextStage);
    }, 650);
  };

  const openChat = () => {
    setOpen(true);
    setShowTeaser(false);
  };

  const handleOption = (opt: Option) => {
    if (opt.to || !opt.value) return; // links handled by <Link>
    setMessages((m) => [...m, { from: 'user', text: opt.label }]);

    if (opt.value === 'start_project') {
      botSay(
        "Awesome — let's do it. What do you need help with?",
        SERVICE_OPTIONS.map((s) => ({ label: s, value: `svc:${s}` })),
        'chips',
        'service',
      );
      return;
    }
    if (opt.value === 'capabilities') {
      botSay(
        'I build full-stack web apps, Shopify & WordPress sites, booking/payment systems, e-commerce, SEO, custom CRM, automation, AI chatbots & custom AI, networking, Hyper-V, SonicWall security and IoT setups. Want to see them all, or start a project?',
        [
          { label: 'See all services', to: '/services' },
          { label: 'Start a project', value: 'start_project' },
        ],
        'chips',
      );
      return;
    }
    if (opt.value === 'hi') {
      botSay(
        'Hey, great to see you here! 🚀 Want to explore the services, or kick off a project?',
        [
          { label: 'Explore services', to: '/services' },
          { label: 'Start a project', value: 'start_project' },
        ],
        'chips',
      );
      return;
    }
    if (opt.value.startsWith('svc:')) {
      const svc = opt.value.slice(4);
      setData((d) => ({ ...d, service: svc }));
      botSay(
        `Nice choice — ${svc}. Tell me a bit about it: what you're building, and any timeline or budget.`,
        [],
        'input',
        'details',
      );
      return;
    }
  };

  const handleSubmit = () => {
    const text = input.trim();
    if (!text) return;
    setInput('');
    setMessages((m) => [...m, { from: 'user', text }]);

    if (stage === 'details') {
      setData((d) => ({ ...d, details: text }));
      botSay("Got it. And what's your name?", [], 'input', 'name');
    } else if (stage === 'name') {
      setData((d) => ({ ...d, name: text }));
      botSay(
        `Perfect, ${text}! Tap below and I'll open WhatsApp with your details so Nikhil can get back to you fast.`,
        [],
        'final',
        'done',
      );
    }
  };

  // Build the hand-off links from collected data.
  const finalName = data.name || 'there';
  const waBody = `Hi Nikhil! I'm ${finalName}.\n\nInterested in: ${data.service}\n\nProject details: ${data.details}\n\n(Sent from your portfolio assistant)`;
  const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(waBody)}`;
  const mailUrl = `mailto:${EMAIL}?subject=${encodeURIComponent(
    `New project enquiry — ${data.service}`,
  )}&body=${encodeURIComponent(waBody)}`;

  return (
    <>
      {/* Launcher */}
      <div className="fixed bottom-5 right-5 z-[60] flex flex-col items-end gap-3">
        {/* Teaser bubble */}
        {showTeaser && !open && (
          <button
            onClick={openChat}
            className="reveal-up max-w-[15rem] rounded-2xl glass-strong border-glow px-4 py-3 text-left text-sm text-indigo-100 shadow-glow"
          >
            <span className="font-semibold text-white">Got a project?</span>{' '}
            Chat with me — I'll send it straight to Nikhil.
          </button>
        )}

        {/* Chat panel */}
        {open && (
          <div className="reveal-up flex h-[30rem] max-h-[72vh] w-[22rem] max-w-[calc(100vw-2.5rem)] flex-col overflow-hidden rounded-3xl glass-strong border-glow shadow-glow">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
              <div className="flex items-center gap-3">
                <span className="relative grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-cyan-400 via-violet-500 to-fuchsia-500">
                  <Bot className="h-5 w-5 text-white" />
                  <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-space-950 bg-green-400" />
                </span>
                <div>
                  <div className="font-display text-sm font-bold text-white">Nikhil's Assistant</div>
                  <div className="flex items-center gap-1 text-[11px] text-green-300">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-400" /> Online
                  </div>
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close chat"
                className="grid h-8 w-8 place-items-center rounded-lg text-indigo-200/70 transition-colors hover:bg-white/10 hover:text-white"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.from === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div
                    className={`max-w-[80%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${
                      m.from === 'user'
                        ? 'bg-gradient-to-br from-cyan-500 to-violet-600 text-white'
                        : 'border border-white/10 bg-white/5 text-indigo-100'
                    }`}
                  >
                    {m.text}
                  </div>
                </div>
              ))}

              {typing && (
                <div className="flex justify-start">
                  <div className="flex items-center gap-1 rounded-2xl border border-white/10 bg-white/5 px-3.5 py-3">
                    {[0, 0.15, 0.3].map((d) => (
                      <span
                        key={d}
                        className="h-1.5 w-1.5 animate-bounce rounded-full bg-indigo-200/70"
                        style={{ animationDelay: `${d}s` }}
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* Chips */}
              {mode === 'chips' && options.length > 0 && !typing && (
                <div className="flex flex-wrap gap-2 pt-1">
                  {options.map((o) =>
                    o.to ? (
                      <Link
                        key={o.label}
                        to={o.to}
                        onClick={() => setOpen(false)}
                        className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-3 py-1.5 text-xs font-medium text-cyan-200 transition-colors hover:bg-cyan-400/20"
                      >
                        {o.label}
                      </Link>
                    ) : (
                      <button
                        key={o.label}
                        onClick={() => handleOption(o)}
                        className="rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-medium text-indigo-100 transition-colors hover:border-cyan-400/40 hover:text-cyan-200"
                      >
                        {o.label}
                      </button>
                    ),
                  )}
                </div>
              )}

              {/* Final hand-off */}
              {mode === 'final' && !typing && (
                <div className="space-y-2 pt-1">
                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 px-4 py-3 text-sm font-semibold text-white transition-transform hover:scale-[1.02]"
                  >
                    <MessageCircle className="h-4 w-4" /> Send on WhatsApp
                  </a>
                  <a
                    href={mailUrl}
                    className="flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 text-sm font-medium text-indigo-100 transition-colors hover:border-cyan-400/40 hover:text-cyan-200"
                  >
                    <Mail className="h-4 w-4" /> Email instead
                  </a>
                </div>
              )}
            </div>

            {/* Input */}
            {mode === 'input' && (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSubmit();
                }}
                className="flex items-center gap-2 border-t border-white/10 p-3"
              >
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  autoFocus
                  placeholder={stage === 'name' ? 'Your name…' : 'Type your message…'}
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2.5 text-sm text-white placeholder-indigo-200/40 outline-none transition-colors focus:border-cyan-400/60"
                />
                <button
                  type="submit"
                  aria-label="Send"
                  className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600 text-white transition-transform hover:scale-105"
                >
                  <Send className="h-4 w-4" />
                </button>
              </form>
            )}

            {/* Footer hint */}
            <div className="border-t border-white/10 px-4 py-2 text-center text-[10px] text-indigo-200/40">
              Powered by Nikhil Khandelwal
            </div>
          </div>
        )}

        {/* Toggle button */}
        <button
          onClick={() => (open ? setOpen(false) : openChat())}
          aria-label={open ? 'Close assistant' : 'Open assistant'}
          className="relative grid h-14 w-14 place-items-center rounded-full bg-gradient-to-br from-cyan-400 via-violet-500 to-fuchsia-500 text-white shadow-glow transition-transform hover:scale-110"
        >
          {!open && <span className="ping-soft absolute inset-0 rounded-full border-2 border-cyan-300/60" />}
          {open ? <X className="h-6 w-6" /> : <Sparkles className="h-6 w-6" />}
        </button>
      </div>
    </>
  );
}
