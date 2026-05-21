import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router';
import CosmicBackground from '@/react-app/components/CosmicBackground';
import ScrollProgress from '@/react-app/components/ScrollProgress';
import Header from '@/react-app/components/Header';
import Footer from '@/react-app/components/Footer';
import HomePage from '@/react-app/pages/Home';
import ProjectDetail from '@/react-app/pages/ProjectDetail';
import Services from '@/react-app/pages/Services';
import Contact from '@/react-app/pages/Contact';

/** Scrolls to top on route change, unless we're navigating to a section. */
function ScrollToTop() {
  const { pathname, state } = useLocation();
  useEffect(() => {
    if ((state as { scrollTo?: string } | null)?.scrollTo) return;
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
  }, [pathname, state]);
  return null;
}

export default function App() {
  return (
    <Router>
      <CosmicBackground />
      <ScrollProgress />
      <ScrollToTop />
      <Header />
      <main className="relative z-10">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects/:slug" element={<ProjectDetail />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}
