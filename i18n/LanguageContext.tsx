import { createContext, useContext, useEffect, ReactNode } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { translations, Lang, Dict } from './translations';
import { WHATSAPP_NUMBER } from '../constants';

export const LANGS: { code: Lang; label: string; short: string; htmlLang: string }[] = [
  { code: 'pt', label: 'Português', short: 'PT', htmlLang: 'pt-BR' },
  { code: 'es', label: 'Español', short: 'ES', htmlLang: 'es' },
  { code: 'en', label: 'English', short: 'EN', htmlLang: 'en' },
];

const STORAGE_KEY = 'preferred-lang';

const isLang = (v: string | undefined | null): v is Lang => v === 'pt' || v === 'es' || v === 'en';

export const langFromPath = (pathname: string): Lang => {
  const seg = pathname.split('/')[1];
  return isLang(seg) ? seg : 'pt';
};

/** Path without the language prefix (no leading slash), e.g. "termos-de-uso" or "". */
export const basePathFromLocation = (pathname: string): string => {
  const parts = pathname.split('/').filter(Boolean);
  if (isLang(parts[0])) parts.shift();
  return parts.join('/');
};

/** Build a localized path for a language. PT has no prefix; others get "/es" or "/en". */
export const buildPath = (lang: Lang, sub: string): string => {
  const cleanSub = sub.replace(/^\/+/, '');
  const prefix = lang === 'pt' ? '' : `/${lang}`;
  if (!cleanSub) return prefix || '/';
  return `${prefix}/${cleanSub}`;
};

const readStored = (): Lang | null => {
  try {
    const v = localStorage.getItem(STORAGE_KEY);
    return isLang(v) ? v : null;
  } catch {
    return null;
  }
};

const writeStored = (lang: Lang) => {
  try {
    localStorage.setItem(STORAGE_KEY, lang);
  } catch {
    /* ignore (e.g. private mode) */
  }
};

interface LangContextValue {
  lang: Lang;
  t: Dict;
  localePath: (sub: string) => string;
  switchLang: (lang: Lang) => void;
  whatsappLink: string;
}

const LangContext = createContext<LangContextValue | null>(null);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const lang = langFromPath(location.pathname);
  const t = translations[lang];

  // First load at the bare root: honor a previously chosen language (returning visitor).
  // Bots and first-time visitors keep the PT canonical at "/".
  useEffect(() => {
    if (location.pathname === '/') {
      const stored = readStored();
      if (stored && stored !== 'pt') {
        navigate(buildPath(stored, ''), { replace: true });
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const localePath = (sub: string) => buildPath(lang, sub);

  const switchLang = (next: Lang) => {
    writeStored(next);
    const sub = basePathFromLocation(location.pathname);
    navigate(buildPath(next, sub));
  };

  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(t.whatsapp.message)}`;

  return (
    <LangContext.Provider value={{ lang, t, localePath, switchLang, whatsappLink }}>
      {children}
    </LangContext.Provider>
  );
};

export const useLang = () => {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error('useLang must be used within LanguageProvider');
  return ctx;
};

export const useTranslation = () => useLang().t;
