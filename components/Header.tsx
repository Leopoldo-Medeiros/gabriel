import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Clock, MapPin } from 'lucide-react';
import { CONTACT_INFO } from '../constants';
import { useLang } from '../i18n/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const { t, localePath, whatsappLink } = useLang();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className="bg-dark text-white py-3 hidden lg:block">
        <div className="container mx-auto px-6 flex justify-between text-sm font-medium tracking-wide">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-3">
              <Phone size={16} className="text-accent" />
              <a
                href={`tel:+55${CONTACT_INFO.phone.replace(/\D/g, '')}`}
                className="opacity-90 hover:opacity-100 transition-opacity"
              >
                {CONTACT_INFO.phone}
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Clock size={16} className="text-accent" />
              <span className="opacity-90">
                {t.schedule.weekdays}: {t.schedule.weekdayHours}
              </span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <MapPin size={16} className="text-accent" />
            <span className="opacity-90">{CONTACT_INFO.address}</span>
          </div>
        </div>
      </div>

      <header
        className={`sticky top-0 z-50 bg-white transition-all duration-300 shadow-sm ${
          scrolled ? 'py-2 shadow-md' : 'py-4'
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center gap-4">
          <Link to={localePath('')} className="flex flex-col group" aria-label={t.header.logoAria}>
            <span className="text-xl sm:text-2xl font-bold text-dark group-hover:text-primary transition-colors leading-tight">
              Gabriel Lechenakoski
            </span>
            <span className="text-[10px] sm:text-xs text-muted uppercase tracking-wide">
              {t.header.brandSubtitle}
            </span>
          </Link>

          <div className="flex items-center gap-3 sm:gap-5">
            <LanguageSwitcher variant="compact" />
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-primary text-white px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all hover:bg-primary-dark hover:shadow-lg whitespace-nowrap"
            >
              {t.header.ctaSchedule}
            </a>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
