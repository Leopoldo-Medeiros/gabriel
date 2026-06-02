import { Globe } from 'lucide-react';
import { LANGS, useLang } from '../i18n/LanguageContext';
import { FLAGS } from './flags';

interface Props {
  variant?: 'compact' | 'pill';
}

const LanguageSwitcher: React.FC<Props> = ({ variant = 'compact' }) => {
  const { lang, switchLang, t } = useLang();

  if (variant === 'pill') {
    return (
      <div className="flex flex-wrap items-center gap-3 justify-center lg:justify-start pt-1">
        <span className="inline-flex items-center gap-2 text-sm text-muted">
          <Globe className="w-4 h-4 text-accent" aria-hidden="true" />
          {t.hero.languagesLabel}
        </span>
        <div className="flex items-center gap-2" role="group" aria-label={t.header.langSwitcherAria}>
          {LANGS.map((l) => {
            const active = l.code === lang;
            return (
              <button
                key={l.code}
                type="button"
                onClick={() => switchLang(l.code)}
                aria-pressed={active}
                className={`inline-flex items-center justify-center px-2.5 py-1 rounded-full text-xs font-semibold transition-all ${
                  active
                    ? 'bg-primary text-white shadow-sm'
                    : 'bg-white text-primary border border-primary/10 shadow-sm hover:bg-primary/5'
                }`}
              >
                {l.short}
                <span className="sr-only">{l.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2" role="group" aria-label={t.header.langSwitcherAria}>
      {LANGS.map((l) => {
        const active = l.code === lang;
        const Flag = FLAGS[l.code];
        return (
          <button
            key={l.code}
            type="button"
            onClick={() => switchLang(l.code)}
            aria-pressed={active}
            title={l.label}
            className={`block w-6 rounded-sm overflow-hidden ring-1 transition-all ${
              active
                ? 'ring-primary ring-2 shadow-sm'
                : 'ring-black/10 opacity-50 grayscale hover:opacity-100 hover:grayscale-0'
            }`}
          >
            <Flag className="block w-full h-auto" />
            <span className="sr-only">{l.label}</span>
          </button>
        );
      })}
    </div>
  );
};

export default LanguageSwitcher;
