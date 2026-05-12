import React from 'react';
import { Instagram, MapPin, Phone, Mail, Clock } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer id="localizacao" className="bg-dark text-white pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          {/* Brand & About */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <h2 className="text-lg font-bold leading-tight text-white">Dr. Gabriel Lechenakoski</h2>
              <p className="text-xs text-white/70 uppercase tracking-wide">Fonoaudiologia</p>
            </div>
            <p className="text-white/80 text-sm leading-relaxed mb-6">
              Comprometidos em melhorar a qualidade de vida através de uma comunicação eficaz. Atendimento humanizado e especializado.
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/fonogabriellechenakoski?igsh=MXdoNzFsam0yN2pucg==" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors text-white">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Contact & Hours Container */}
          <div className="lg:col-span-2 grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-bold mb-6 relative inline-block text-white">
                Contato
                <span className="absolute -bottom-2 left-0 w-12 h-1 bg-accent rounded-full"></span>
              </h3>
              <ul className="space-y-4 text-sm text-white/80">
                <li className="flex items-start gap-3">
                  <MapPin size={18} className="text-accent shrink-0 mt-0.5" />
                  <span>{CONTACT_INFO.addressFull}</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={18} className="text-accent shrink-0" />
                  <span>{CONTACT_INFO.phone}</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail size={18} className="text-accent shrink-0" />
                  <span>{CONTACT_INFO.email}</span>
                </li>
              </ul>
            </div>

            {/* Opening Hours */}
            <div>
              <h3 className="text-lg font-bold mb-6 relative inline-block text-white">
                Horários
                <span className="absolute -bottom-2 left-0 w-12 h-1 bg-accent rounded-full"></span>
              </h3>
              <ul className="space-y-3 text-sm text-white/80">
                <li className="flex items-center justify-between border-b border-white/20 pb-2">
                  <span className="flex items-center gap-2"><Clock size={14} className="text-accent" /> Seg - Sex</span>
                  <span>{CONTACT_INFO.hours.weekday}</span>
                </li>
                <li className="flex items-center justify-between border-b border-white/20 pb-2">
                  <span className="flex items-center gap-2"><Clock size={14} className="text-accent" /> Sábado</span>
                  <span>{CONTACT_INFO.hours.saturday}</span>
                </li>
                <li className="flex items-center justify-between border-b border-white/20 pb-2">
                  <span className="flex items-center gap-2"><Clock size={14} className="text-accent" /> Domingo</span>
                  <span className="text-accent">{CONTACT_INFO.hours.sunday}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/50">
          <p>© 2026 Dr. Gabriel Lechenakoski. Todos os direitos reservados.</p>
          <div className="flex gap-6">
            <a href="/termos-de-uso" className="hover:text-white transition-colors">Termos de Uso</a>
            <a href="/politica-privacidade" className="hover:text-white transition-colors">Política de Privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
