import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import TermosDeUso from './components/TermosDeUso';
import PoliticaPrivacidade from './components/PoliticaPrivacidade';
import { usePageMeta } from './hooks/usePageMeta';

function HomePage() {
  usePageMeta({
    title: 'Dr. Gabriel Lechenakoski - Fonoaudiólogo em Curitiba | Dislexia, PAC e Linguagem',
    description: 'Fonoaudiólogo em Curitiba especializado em Dislexia, Processamento Auditivo Central (PAC) e Linguagem. Atendimento humanizado para crianças, adultos e idosos.',
    canonical: 'https://lechenakoski.com.br/',
  });
  return (
    <main>
      <Hero />
      <About />
      <Testimonials />
    </main>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/termos-de-uso" element={<TermosDeUso />} />
          <Route path="/politica-privacidade" element={<PoliticaPrivacidade />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
