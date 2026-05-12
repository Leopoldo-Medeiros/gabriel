import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import TermosDeUso from './components/TermosDeUso';
import PoliticaPrivacidade from './components/PoliticaPrivacidade';

function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Testimonials />
    </>
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
