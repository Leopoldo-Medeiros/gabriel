import React from 'react';
import { Quote } from 'lucide-react';
import { TESTIMONIALS } from '../constants';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Testimonials: React.FC = () => {
  return (
    <section id="reviews" className="py-24 bg-light relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="section-subtitle">
            Depoimentos
          </span>
          <h2 className="section-title">
            O Que Nossos Pacientes Dizem
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
        </div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          pagination={{ 
            clickable: true,
            bulletActiveClass: 'swiper-pagination-bullet-active',
            bulletClass: 'swiper-pagination-bullet'
          }}
          autoplay={{ delay: 5000 }}
          className="pb-16"
        >
          {TESTIMONIALS.map((t) => (
            <SwiperSlide key={t.id}>
              <div className="bg-white rounded-2xl p-8 h-full shadow-lg relative mt-6 mx-2 hover:-translate-y-2 transition-transform duration-300">
                <div className="absolute -top-6 left-8 w-12 h-12 bg-accent text-white rounded-full flex items-center justify-center shadow-lg">
                  <Quote size={20} fill="currentColor" />
                </div>
                
                <div className="mt-6">
                  <p className="text-muted text-lg italic leading-relaxed mb-6">
                    "{t.text}"
                  </p>
                  
                  <div className="flex items-center gap-4 pt-6 border-t border-[#253B5F]/10">
                    <div className="w-10 h-10 rounded-full bg-secondary text-primary font-bold flex items-center justify-center text-sm">
                      {t.author.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-bold text-dark text-base">{t.author}</h4>
                      {t.role && (
                        <p className="text-xs text-muted uppercase tracking-wide font-medium">
                          {t.role}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
