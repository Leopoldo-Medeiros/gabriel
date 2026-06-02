import { SPECIALTIES } from '../constants';
import { User } from 'lucide-react';
import { useLang } from '../i18n/LanguageContext';

const About: React.FC = () => {
  const { t, whatsappLink } = useLang();

  return (
    <>
      <section id="especialidades" className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="section-subtitle">{t.specialtiesSection.eyebrow}</span>
            <h2 className="section-title">{t.specialtiesSection.title}</h2>
            <p className="text-muted text-lg mt-4">{t.specialtiesSection.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {SPECIALTIES.map((specialty) => {
              const copy = t.specialties[specialty.key];
              return (
                <article
                  key={specialty.key}
                  className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                >
                  <img
                    src={specialty.image}
                    alt={copy.title}
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" aria-hidden="true"></div>
                  <div className="relative h-full p-6 flex flex-col justify-end min-h-[300px]">
                    <h3 className="text-xl font-bold text-white mb-2">{copy.title}</h3>
                    <p className="text-white/80 text-sm leading-relaxed mb-4">{copy.description}</p>
                    <a
                      href={whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent font-semibold text-sm hover:underline inline-flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity"
                      aria-label={t.specialtiesSection.learnMoreAria.replace('{title}', copy.title)}
                    >
                      {t.specialtiesSection.learnMore} <span aria-hidden="true">→</span>
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="sobre" className="pt-8 pb-24 lg:py-24 bg-secondary/30 relative">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-[1fr_1fr] gap-2 items-center">
            <div className="relative max-w-xl mx-auto lg:max-w-none lg:-my-16 xl:-my-24">
              <div
                aria-hidden="true"
                className="absolute inset-0 overflow-hidden lg:[mask-image:linear-gradient(to_bottom,transparent_0%,transparent_15%,black_35%,black_100%)] lg:[-webkit-mask-image:linear-gradient(to_bottom,transparent_0%,transparent_15%,black_35%,black_100%)]"
              >
                <svg className="w-full h-full text-primary/10" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="about-grid" x="0" y="0" width="48" height="48" patternUnits="userSpaceOnUse">
                      <path d="M 48 0 L 0 0 0 48" fill="none" stroke="currentColor" strokeWidth="1" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#about-grid)" />
                </svg>
              </div>

              <div
                aria-hidden="true"
                className="absolute inset-0 pointer-events-none lg:[mask-image:linear-gradient(to_bottom,transparent_0%,transparent_15%,black_35%,black_100%)] lg:[-webkit-mask-image:linear-gradient(to_bottom,transparent_0%,transparent_15%,black_35%,black_100%)]"
                style={{
                  background:
                    'radial-gradient(ellipse 55% 75% at 50% 55%, rgba(226,149,120,0.18) 0%, rgba(237,246,249,0.55) 45%, transparent 80%)',
                }}
              />

              <img
                src="/images/Gabriel2.png"
                alt="Dr. Gabriel Lechenakoski"
                loading="lazy"
                decoding="async"
                className="relative z-10 w-full h-auto object-contain drop-shadow-2xl"
              />
            </div>

            <div className="lg:-ml-12 xl:-ml-20">
              <span className="section-subtitle !text-left">{t.about.eyebrow}</span>
              <h2 className="text-4xl font-bold text-dark mb-6 leading-tight">{t.about.title}</h2>
              <p className="text-muted text-lg leading-relaxed mb-6">{t.about.paragraph}</p>

              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary shadow-sm shrink-0">
                    <User size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-dark text-lg">{t.about.featureTitle}</h3>
                    <p className="text-muted text-sm">{t.about.featureDesc}</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-8 border-t border-gray-200 pt-8">
                <div>
                  <span className="block text-4xl font-bold text-primary leading-none">{t.about.statYearsValue}</span>
                  <span className="text-sm text-muted font-medium">{t.about.statYearsLabel}</span>
                </div>
                <div className="w-px h-12 bg-gray-200" aria-hidden="true"></div>
                <div>
                  <span className="block text-4xl font-bold text-primary leading-none">{t.about.statPatientsValue}</span>
                  <span className="text-sm text-muted font-medium">{t.about.statPatientsLabel}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
