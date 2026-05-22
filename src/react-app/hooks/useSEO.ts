import { useEffect } from 'react';

/**
 * Lightweight, dependency-free SEO hook for this SPA.
 *
 * It updates the document <title>, meta description, canonical link and the
 * Open Graph / Twitter tags whenever a page mounts or its values change, then
 * restores nothing destructive — the next page simply overwrites them. An
 * optional per-page JSON-LD block is injected and cleaned up on unmount.
 *
 * Google renders client-side JS, so these dynamic tags are picked up on crawl.
 */

export const SITE_URL = 'https://portfolio-ten-dusky-q7b2420uo4.vercel.app';
const DEFAULT_IMAGE = `${SITE_URL}/nikhil-kh.png`;

interface SEOOptions {
  title: string;
  description: string;
  /** Path beginning with "/", e.g. "/services" or "/projects/karpur". */
  path: string;
  image?: string;
  /** Parsed JSON-LD object (or array) to inject as a page-specific block. */
  jsonLd?: object;
}

function setMeta(selector: string, attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function setCanonical(url: string) {
  let link = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!link) {
    link = document.createElement('link');
    link.setAttribute('rel', 'canonical');
    document.head.appendChild(link);
  }
  link.setAttribute('href', url);
}

const PAGE_LD_ID = 'seo-page-jsonld';

export function useSEO({ title, description, path, image, jsonLd }: SEOOptions) {
  useEffect(() => {
    const url = `${SITE_URL}${path === '/' ? '/' : path}`;
    const img = image || DEFAULT_IMAGE;

    document.title = title;

    setMeta('meta[name="description"]', 'name', 'description', description);
    setCanonical(url);

    // Open Graph
    setMeta('meta[property="og:title"]', 'property', 'og:title', title);
    setMeta('meta[property="og:description"]', 'property', 'og:description', description);
    setMeta('meta[property="og:url"]', 'property', 'og:url', url);
    setMeta('meta[property="og:image"]', 'property', 'og:image', img);

    // Twitter
    setMeta('meta[name="twitter:title"]', 'name', 'twitter:title', title);
    setMeta('meta[name="twitter:description"]', 'name', 'twitter:description', description);
    setMeta('meta[name="twitter:image"]', 'name', 'twitter:image', img);

    // Per-page JSON-LD
    let ldEl: HTMLScriptElement | null = null;
    if (jsonLd) {
      document.getElementById(PAGE_LD_ID)?.remove();
      ldEl = document.createElement('script');
      ldEl.type = 'application/ld+json';
      ldEl.id = PAGE_LD_ID;
      ldEl.text = JSON.stringify(jsonLd);
      document.head.appendChild(ldEl);
    }

    return () => {
      ldEl?.remove();
    };
  }, [title, description, path, image, jsonLd]);
}
