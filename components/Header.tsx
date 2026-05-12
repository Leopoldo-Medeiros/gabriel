import { useState, useEffect } from 'react';
import { Menu, X, Phone, Clock, MapPin } from 'lucide-react';
import { WHATSAPP_LINK, CONTACT_INFO } from '../constants.tsx';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#home', text: 'Início' },
    { href: '#especialidades', text: 'Especialidades' },
    { href: '#sobre', text: 'Sobre' },
    { href: '#reviews', text: 'Depoimentos' },
    { href: '#localizacao', text: 'Contato' },
  ];

  return (
    <>
      {/* Top Bar Info - Visible on desktop */}
      <div className="bg-dark text-white py-3 hidden lg:block">
        <div className="container mx-auto px-6 flex justify-between text-sm font-medium tracking-wide">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-3">
              <Phone size={16} className="text-accent" />
              <span className="opacity-90">{CONTACT_INFO.phone}</span>
            </div>
            <div className="flex items-center gap-3">
              <Clock size={16} className="text-accent" />
              <span className="opacity-90">{CONTACT_INFO.hours.weekday}</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <MapPin size={16} className="text-accent" />
            <span className="opacity-90">{CONTACT_INFO.address}</span>
          </div>
        </div>
      </div>

      <header className={`sticky top-0 z-50 bg-white transition-all duration-300 shadow-sm ${scrolled ? 'py-2 shadow-md' : 'py-4'}`}>
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <a href="/" className="flex items-center gap-4 group">
              <div className="flex flex-col">
                <h1 className="text-2xl font-bold text-dark group-hover:text-primary transition-colors">
                  Gabriel Lechenakoski
                </h1>
                <p className="text-xs text-muted uppercase tracking-wide">
                  Fonoaudiologia
                </p>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-dark font-medium text-sm hover:text-primary transition-colors relative group py-2"
                >
                  {item.text}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-sm px-6 py-2.5 shadow-none hover:shadow-lg"
              >
                Agendar Consulta
              </a>
            </nav>

            {/* Mobile Toggle */}
            <button 
              className="lg:hidden text-dark p-2 hover:bg-light rounded-lg transition-colors" 
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Overlay */}
      <div 
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 lg:hidden ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile Navigation Drawer */}
      <div className={`fixed top-0 right-0 w-[80%] max-w-sm h-full bg-white z-50 shadow-2xl transition-transform duration-300 lg:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-6 h-full flex flex-col">
          <div className="flex justify-between items-center mb-8 pb-4 border-b border-[#253B5F]/10">
            <span className="font-bold text-lg text-primary">Menu</span>
            <button 
              className="p-2 hover:bg-light rounded-full transition-colors"
              onClick={() => setIsOpen(false)}
            >
              <X size={24} className="text-muted" />
            </button>
          </div>

          <nav className="flex-1 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 text-dark font-medium hover:bg-secondary/50 hover:text-primary rounded-lg transition-colors"
              >
                {item.text}
              </a>
            ))}
          </nav>

          <div className="mt-auto pt-6 border-t border-[#253B5F]/10">
             <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-2 w-full bg-primary text-white py-3 rounded-xl font-bold shadow-lg active:scale-95 transition-transform"
            >
              Agendar no WhatsApp
            </a>
            
            <div className="mt-6 space-y-3 text-sm text-muted">
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-primary" />
                <span>{CONTACT_INFO.phone}</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin size={16} className="text-primary" />
                <span>Curitiba, PR</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
