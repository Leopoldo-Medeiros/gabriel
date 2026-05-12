import { WHATSAPP_LINK } from '../constants';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative bg-secondary pt-24 pb-20 lg:pt-32 lg:pb-28">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 text-center lg:text-left">
            <span className="section-subtitle !text-left">Bem-vindo à sua nova voz</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark leading-tight">
              Fonoaudiologia de Excelência para Todas as Idades
            </h1>
            <p className="text-lg text-muted leading-relaxed max-w-xl mx-auto lg:mx-0">
              Transforme sua comunicação e qualidade de vida com tratamentos personalizados e baseados em evidências científicas.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary group"
              >
                Agende sua Avaliação
                <ArrowRight className="inline-block ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#especialidades"
                className="btn-outline"
              >
                Nossos Serviços
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="relative hidden lg:block">
            <div className="relative z-10 rounded-3xl shadow-2xl overflow-hidden aspect-[4/3]">
              <img 
                src="/images/Gabriel.jpeg" 
                alt="Dr. Gabriel Lechenakoski - Fonoaudiólogo" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-primary/10 rounded-full -z-0"></div>
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-accent/10 rounded-full -z-0"></div>
            <div className="absolute bottom-1/4 -right-12 w-16 h-16 border-4 border-primary rounded-full -z-0"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
