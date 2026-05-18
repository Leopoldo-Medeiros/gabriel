import { WHATSAPP_LINK } from '../constants';
import { ArrowRight, Ear, Mic } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative bg-secondary pt-16 lg:pt-32 pb-0 overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute inset-0 overflow-hidden"
      >
        <svg className="w-full h-full text-primary/10" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hero-grid" x="0" y="0" width="48" height="48" patternUnits="userSpaceOnUse">
              <path d="M 48 0 L 0 0 0 48" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-grid)" />
        </svg>
      </div>

      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 55% 75% at 75% 55%, rgba(226,149,120,0.18) 0%, rgba(237,246,249,0.55) 45%, transparent 80%)',
        }}
      />

      <div className="container mx-auto px-6 relative">
        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-10 items-end">
          <div className="space-y-8 text-center lg:text-left order-2 lg:order-1 lg:self-center lg:-mt-12">
            <span className="section-subtitle !text-left">Bem-vindo à sua nova voz</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark leading-tight">
              Fonoaudiologia de Excelência para Todas as Idades
            </h1>
            <p className="text-lg text-muted leading-relaxed max-w-xl mx-auto lg:mx-0">
              Transforme sua comunicação e qualidade de vida com tratamentos personalizados e baseados em evidências científicas.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-primary text-white px-5 py-2 rounded-full text-sm font-medium transition-all hover:bg-primary-dark shadow-md hover:shadow-lg hover:-translate-y-0.5 group"
                aria-label="Agendar avaliação pelo WhatsApp"
              >
                Agende sua Avaliação
                <ArrowRight className="inline-block ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#especialidades"
                className="inline-flex items-center justify-center border-2 border-primary text-primary px-5 py-2 rounded-full text-sm font-medium transition-all hover:bg-primary hover:text-white"
              >
                Nossos Serviços
              </a>
            </div>
          </div>

          <div className="relative order-1 lg:order-2">
            <div className="relative max-w-none sm:max-w-lg mx-auto lg:max-w-none lg:-mt-24 lg:mb-0 xl:-mt-32 xl:-mr-8">
              <div className="hidden lg:flex absolute lg:top-8 lg:left-[18%] z-20 w-12 h-12 bg-white rounded-full shadow-xl items-center justify-center">
                <Ear size={20} className="text-primary" aria-label="Audição" />
              </div>

              <div className="hidden lg:flex absolute top-1/2 lg:-right-2 -translate-y-1/2 z-20 w-14 h-14 bg-accent rounded-2xl shadow-xl items-center justify-center rotate-6">
                <Mic size={22} className="text-white" aria-label="Voz" />
              </div>

              <img
                src="/images/Gabriel2.png"
                alt="Dr. Gabriel Lechenakoski - Fonoaudiólogo"
                className="relative z-10 w-full h-auto object-contain drop-shadow-2xl scale-125 sm:scale-110 lg:scale-100 origin-bottom"
                width={800}
                height={1000}
                fetchPriority="high"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
