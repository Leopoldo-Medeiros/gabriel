import { BrowserRouter as Router, Routes, Route, Navigate, Outlet, useParams } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import TermosDeUso from './components/TermosDeUso';
import PoliticaPrivacidade from './components/PoliticaPrivacidade';
import WhatsAppFloat from './components/WhatsAppFloat';
import { LanguageProvider, useTranslation } from './i18n/LanguageContext';
import { usePageMeta } from './hooks/usePageMeta';

function HomePage() {
  const t = useTranslation();
  usePageMeta({
    title: t.meta.home.title,
    description: t.meta.home.description,
    path: '',
  });
  return (
    <main>
      <Hero />
      <About />
      <Testimonials />
    </main>
  );
}

// Validates the :lang URL segment; unknown languages fall back to the PT home.
function LangGuard() {
  const { lang } = useParams();
  if (lang !== 'es' && lang !== 'en') return <Navigate to="/" replace />;
  return <Outlet />;
}

function App() {
  return (
    <Router>
      <LanguageProvider>
        <div className="min-h-screen">
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/termos-de-uso" element={<TermosDeUso />} />
            <Route path="/politica-privacidade" element={<PoliticaPrivacidade />} />
            <Route path="/:lang" element={<LangGuard />}>
              <Route index element={<HomePage />} />
              <Route path="termos-de-uso" element={<TermosDeUso />} />
              <Route path="politica-privacidade" element={<PoliticaPrivacidade />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Route>
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
          <Footer />
          <WhatsAppFloat />
        </div>
      </LanguageProvider>
    </Router>
  );
}

export default App;
