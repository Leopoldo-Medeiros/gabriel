import React, { FC } from 'react';
import { SPECIALTIES } from '../constants';
import { User, Award } from 'lucide-react';

const About: FC = () => {
  return (
    <>
      {/* Specialties Section */}
      <section id="especialidades" className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="section-subtitle">Nossas Especialidades</span>
            <h2 className="section-title">Soluções Completas em Fonoaudiologia</h2>
            <p className="text-muted text-lg mt-4">
              Oferecemos tratamentos personalizados para atender às necessidades específicas de cada paciente, desde crianças até idosos.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {SPECIALTIES.map((specialty, index) => (
              <div
                key={index}
                className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              >
                <img
                  src={specialty.image}
                  alt={specialty.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => {
                    e.currentTarget.src = `https://via.placeholder.com/400x300/e5e7eb/6b7280?text=${specialty.title}`;
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
                <div className="relative h-full p-6 flex flex-col justify-end min-h-[300px]">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {specialty.title}
                  </h3>
                  <p className="text-white/80 text-sm leading-relaxed mb-4">
                    {specialty.description}
                  </p>
                  <a href="#" className="text-accent font-semibold text-sm hover:underline flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    Saiba mais <span className="text-xs">→</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Professional Section */}
      <section id="sobre" className="py-24 bg-secondary/30 relative">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image Side */}
            <div className="relative">
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
                <img 
                  src="/images/Gabriel.jpeg" 
                  alt="Dr. Gabriel Lechenakoski" 
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute top-10 -left-10 w-full h-full border-4 border-primary rounded-2xl -z-0 hidden lg:block"></div>
            </div>

            {/* Content Side */}
            <div>
              <span className="section-subtitle !text-left">Conheça o Especialista</span>
              <h2 className="text-4xl font-bold text-dark mb-6 leading-tight">
                Dedicação e Experiência ao Seu Alcance
              </h2>
              <p className="text-muted text-lg leading-relaxed mb-6">
                Com 5 anos de experiência clínica, o Dr. Gabriel Lechenakoski combina conhecimento técnico avançado com uma abordagem humanizada.
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary shadow-sm shrink-0">
                    <User size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-dark text-lg">Atendimento Personalizado</h4>
                    <p className="text-muted text-sm">Cada paciente é único, e nossos planos de tratamento refletem essa individualidade.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary shadow-sm shrink-0">
                    <Award size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-dark text-lg">Qualificação Comprovada</h4>
                    <p className="text-muted text-sm">Pós-graduação em Linguagem e Audição pela PUCPR e constante atualização profissional.</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-8 border-t border-gray-200 pt-8">
                <div>
                  <span className="block text-4xl font-bold text-primary">5+</span>
                  <span className="text-sm text-muted font-medium">Anos de Experiência</span>
                </div>
                <div className="w-px h-12 bg-gray-200"></div>
                <div>
                  <span className="block text-4xl font-bold text-primary">Centenas</span>
                  <span className="text-sm text-muted font-medium">Pacientes Reabilitados</span>
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
