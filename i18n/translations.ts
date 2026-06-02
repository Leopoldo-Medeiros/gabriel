export type Lang = 'pt' | 'es' | 'en';

export interface LegalDef {
  label: string;
  value: string;
}

export interface LegalSection {
  heading: string;
  paragraphs?: string[];
  defs?: LegalDef[];
  list?: string[];
}

export interface LegalDoc {
  title: string;
  sections: LegalSection[];
}

export interface Testimonial {
  text: string;
  author: string;
  role: string;
}

export interface Dict {
  langName: string;
  header: {
    brandSubtitle: string;
    ctaSchedule: string;
    logoAria: string;
    langSwitcherAria: string;
  };
  schedule: {
    weekdays: string;
    saturday: string;
    sunday: string;
    weekdayHours: string;
    saturdayHours: string;
    closed: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    ctaPrimary: string;
    ctaPrimaryAria: string;
    ctaSecondary: string;
    languagesLabel: string;
  };
  specialtiesSection: {
    eyebrow: string;
    title: string;
    subtitle: string;
    learnMore: string;
    learnMoreAria: string;
  };
  specialties: Record<string, { title: string; description: string }>;
  about: {
    eyebrow: string;
    title: string;
    paragraph: string;
    featureTitle: string;
    featureDesc: string;
    statYearsValue: string;
    statYearsLabel: string;
    statPatientsValue: string;
    statPatientsLabel: string;
  };
  testimonialsSection: {
    eyebrow: string;
    title: string;
  };
  testimonials: Testimonial[];
  footer: {
    about: string;
    contactTitle: string;
    scheduleTitle: string;
    rights: string;
    termsLink: string;
    privacyLink: string;
    instagramAria: string;
  };
  whatsapp: {
    floatAria: string;
    message: string;
  };
  meta: {
    home: { title: string; description: string };
    terms: { title: string; description: string };
    privacy: { title: string; description: string };
  };
  legal: {
    backToHome: string;
    lastUpdatedLabel: string;
    lastUpdatedDate: string;
    terms: LegalDoc;
    privacy: LegalDoc & { complianceNote: string };
  };
}

const pt: Dict = {
  langName: 'Português',
  header: {
    brandSubtitle: 'Fonoaudiologia',
    ctaSchedule: 'Agendar Consulta',
    logoAria: 'Gabriel Lechenakoski - Página inicial',
    langSwitcherAria: 'Selecionar idioma',
  },
  schedule: {
    weekdays: 'Seg - Sex',
    saturday: 'Sábado',
    sunday: 'Domingo',
    weekdayHours: '08:30 - 18:00',
    saturdayHours: '08:30 - 12:00',
    closed: 'Fechado',
  },
  hero: {
    eyebrow: 'Bem-vindo à sua nova voz',
    title: 'Fonoaudiologia de Excelência para Todas as Idades',
    subtitle:
      'Transforme sua comunicação e qualidade de vida com tratamentos personalizados e baseados em evidências científicas.',
    ctaPrimary: 'Agende sua Avaliação',
    ctaPrimaryAria: 'Agendar avaliação pelo WhatsApp',
    ctaSecondary: 'Nossos Serviços',
    languagesLabel: 'Atendimento em',
  },
  specialtiesSection: {
    eyebrow: 'Nossas Especialidades',
    title: 'Soluções Completas em Fonoaudiologia',
    subtitle:
      'Oferecemos tratamentos personalizados para atender às necessidades específicas de cada paciente, desde crianças até idosos.',
    learnMore: 'Saiba mais',
    learnMoreAria: 'Saiba mais sobre {title} pelo WhatsApp',
  },
  specialties: {
    pac: {
      title: 'PAC',
      description:
        'Processamento Auditivo Central — avaliação e tratamento de dificuldades no processamento auditivo',
    },
    language: {
      title: 'Linguagem oral/escrita',
      description: 'Desenvolvimento da comunicação, leitura e escrita em todas as fases da vida',
    },
    voice: {
      title: 'Voz',
      description: 'Avaliação e tratamento de questões vocais para profissionais e pacientes em geral',
    },
  },
  about: {
    eyebrow: 'Conheça o Especialista',
    title: 'Dedicação e Experiência ao Seu Alcance',
    paragraph:
      'Com anos de experiência clínica, o Dr. Gabriel Lechenakoski combina conhecimento técnico avançado com uma abordagem humanizada.',
    featureTitle: 'Atendimento Personalizado',
    featureDesc: 'Cada paciente é único, e nossos planos de tratamento refletem essa individualidade.',
    statYearsValue: 'Anos',
    statYearsLabel: 'de Experiência',
    statPatientsValue: 'Centenas',
    statPatientsLabel: 'de Pacientes',
  },
  testimonialsSection: {
    eyebrow: 'Depoimentos',
    title: 'O Que Nossos Pacientes Dizem',
  },
  testimonials: [
    {
      text: "Antes do Gabriel, meu filho parecia estar sempre 'no mundo da lua' e não entendia comandos simples. Depois da reabilitação do PAC, a atenção dele mudou completamente. É outro menino na escola!",
      author: 'Mãe do Lucas',
      role: '8 anos',
    },
    {
      text: 'Sempre achei que tinha um problema de audição, mas os exames davam normal. O Gabriel identificou a questão do PAC e, com o treinamento, hoje não me sinto mais cansada em ambientes barulhentos. Recomendo muito!',
      author: 'Mariana',
      role: 'Paciente Adulta',
    },
    {
      text: 'O atendimento do Gabriel é diferenciado. Ele não foca só no consultório, ele conversou com a professora do meu filho e nos deu todo o suporte. Finalmente ouvimos as primeiras frases vindo de forma clara.',
      author: 'Fernanda',
      role: 'Mãe do Pedro',
    },
    {
      text: "O que mais nos encantou foi o atendimento humanizado. O Gabriel tem uma paciência e um jeito com as crianças que torna a terapia uma diversão. Meu filho adora ir para a 'aula' do Gabriel!",
      author: 'Ricardo',
      role: 'Pai do Arthur',
    },
    {
      text: 'Minha voz cansava muito rápido no trabalho. Com as técnicas e o acompanhamento do Gabriel, aprendi a usar minha voz sem esforço. Profissional excelente e muito ético.',
      author: 'Juliana',
      role: 'Professora',
    },
    {
      text: 'O Gabriel foi a ponte que faltava entre nós e a escola. Ele explicou o que estava acontecendo com nossa filha de uma forma que ninguém tinha feito antes. Sentimos total apoio nessa jornada.',
      author: 'Família Silva',
      role: 'Pais de paciente',
    },
  ],
  footer: {
    about:
      'Comprometidos em melhorar a qualidade de vida através de uma comunicação eficaz. Atendimento humanizado e especializado.',
    contactTitle: 'Contato',
    scheduleTitle: 'Horários',
    rights: 'Todos os direitos reservados.',
    termsLink: 'Termos de Uso',
    privacyLink: 'Política de Privacidade',
    instagramAria: 'Instagram do Dr. Gabriel Lechenakoski',
  },
  whatsapp: {
    floatAria: 'Conversar pelo WhatsApp',
    message: 'Olá, gostaria de agendar uma consulta',
  },
  meta: {
    home: {
      title: 'Dr. Gabriel Lechenakoski - Fonoaudiólogo em Curitiba | Dislexia, PAC e Linguagem',
      description:
        'Fonoaudiólogo em Curitiba especializado em Dislexia, Processamento Auditivo Central (PAC) e Linguagem. Atendimento humanizado para crianças, adultos e idosos.',
    },
    terms: {
      title: 'Termos de Uso | Dr. Gabriel Lechenakoski',
      description: 'Termos de uso do site do Dr. Gabriel Lechenakoski - Fonoaudiólogo em Curitiba.',
    },
    privacy: {
      title: 'Política de Privacidade | Dr. Gabriel Lechenakoski',
      description: 'Política de Privacidade do site do Dr. Gabriel Lechenakoski em conformidade com a LGPD.',
    },
  },
  legal: {
    backToHome: 'Voltar para página inicial',
    lastUpdatedLabel: 'Data da última atualização:',
    lastUpdatedDate: '15 de março de 2026',
    terms: {
      title: 'Termos de Uso',
      sections: [
        {
          heading: '1. Objetivo do Site',
          paragraphs: [
            'Este site tem como finalidade fornecer informações sobre os serviços fonoaudiológicos oferecidos pelo Dr. Gabriel Lechenakoski, facilitar o agendamento de consultas e compartilhar conteúdo educacional sobre saúde da comunicação e audição.',
          ],
        },
        {
          heading: '2. Limitação de Responsabilidade',
          paragraphs: [
            'As informações disponibilizadas neste site têm caráter educacional e informativo, não substituindo em hipótese alguma a consulta fonoaudiológica, médica ou outros profissionais de saúde.',
            'O Dr. Gabriel Lechenakoski não se responsabiliza por decisões tomadas com base exclusivamente nas informações contidas neste site.',
          ],
        },
        {
          heading: '3. Propriedade Intelectual',
          paragraphs: [
            'Todo o conteúdo deste site, incluindo textos, imagens, vídeos, design e marca, é protegido pelas leis de direitos autorais e propriedade intelectual.',
            'É proibida a reprodução, distribuição ou modificação de qualquer conteúdo sem autorização expressa do Dr. Gabriel Lechenakoski.',
          ],
        },
        {
          heading: '4. Uso Adequado',
          paragraphs: ['O usuário compromete-se a utilizar este site de maneira ética e legal, abstendo-se de:'],
          list: [
            'Realizar atividades ilícitas ou fraudulentas',
            'Enviar mensagens ofensivas ou inadequadas',
            'Tentar violar a segurança do site',
            'Reproduzir conteúdo sem autorização',
          ],
        },
        {
          heading: '5. Agendamentos',
          paragraphs: ['Os agendamentos realizados através deste site seguem as seguintes regras:'],
          list: [
            'Confirmar consulta com no mínimo 24 horas de antecedência',
            'Cancelamentos devem ser feitos com pelo menos 12 horas de antecedência',
            'Não comparecimento sem cancelamento poderá sujeitar a multa',
            'Horários sujeitos a disponibilidade',
          ],
        },
        {
          heading: '6. Disponibilidade do Serviço',
          paragraphs: [
            'O site estará disponível 24/7, exceto por manutenções programadas ou problemas técnicos fora do nosso controle. O tempo de resposta para contatos e agendamentos é de até 48 horas úteis.',
          ],
        },
        {
          heading: '7. Alterações nos Termos',
          paragraphs: [
            'Estes termos podem ser alterados a qualquer momento. As alterações entrarão em vigor imediatamente após sua publicação no site.',
          ],
        },
        {
          heading: '8. Lei Aplicável',
          paragraphs: [
            'Estes termos são regidos pelas leis brasileiras. Quaisquer disputas serão resolvidas no foro da comarca de Curitiba - PR.',
          ],
        },
      ],
    },
    privacy: {
      title: 'Política de Privacidade',
      complianceNote:
        'Esta política está em conformidade com a Lei Geral de Proteção de Dados (LGPD) - Lei nº 13.709/2018 e regulamentos aplicáveis à área da saúde.',
      sections: [
        {
          heading: '1. Dados Coletados',
          paragraphs: ['Coletamos e tratamos os seguintes dados pessoais:'],
          defs: [
            { label: 'Dados de identificação:', value: 'Nome completo, CPF, data de nascimento' },
            { label: 'Dados de contato:', value: 'Telefone, e-mail, endereço' },
            { label: 'Dados de saúde:', value: 'Histórico clínico, queixas, diagnósticos, evoluções terapêuticas' },
            { label: 'Dados de agendamento:', value: 'Horários, frequência, cancelamentos' },
          ],
        },
        {
          heading: '2. Finalidade do Tratamento',
          paragraphs: ['Seus dados são utilizados para:'],
          list: [
            'Prestação de serviços fonoaudiológicos',
            'Agendamento e gestão de consultas',
            'Elaboração de prontuários e evoluções clínicas',
            'Comunicação sobre atendimentos e orientações',
            'Cumprimento de obrigações legais da área da saúde',
            'Faturamento e gestão administrativa',
          ],
        },
        {
          heading: '3. Base Legal',
          paragraphs: ['O tratamento de seus dados pessoais baseia-se:'],
          list: [
            'Para o exercício de profissão: Art. 7º, II, da LGPD',
            'Para proteção da vida: Art. 11, II, g, da LGPD (dados sensíveis)',
            'Para tutela da saúde: Art. 11, II, f, da LGPD (dados sensíveis)',
            'Quando necessário para atendimento: Art. 7º, III, da LGPD',
          ],
        },
        {
          heading: '4. Compartilhamento de Dados',
          paragraphs: ['Seus dados não são vendidos ou compartilhados com terceiros, exceto nas seguintes situações:'],
          list: [
            'Com profissionais da equipe clínica (com consentimento)',
            'Com médicos e outros profissionais de saúde (com autorização)',
            'Com autoridades de saúde (determinação legal ou judicial)',
            'Com planos de saúde (quando necessário para autorizações)',
            'Com sistemas de gestão clínica (processamento seguro)',
          ],
        },
        {
          heading: '5. Medidas de Segurança',
          paragraphs: ['Adotamos rigorosas medidas de segurança:'],
          list: [
            'Criptografia de dados em trânsito e em repouso',
            'Acesso restrito e autenticado',
            'Backup regular e seguro',
            'Monitoramento de atividades suspeitas',
            'Treinamento da equipe em proteção de dados',
          ],
        },
        {
          heading: '6. Direitos do Titular',
          paragraphs: ['Você tem os seguintes direitos:'],
          list: [
            'Confirmar a existência de tratamento',
            'Acessar seus dados pessoais',
            'Corrigir dados incompletos ou inexatos',
            'Solicitar anonimização ou eliminação',
            'Revogar o consentimento',
            'Informar sobre compartilhamento de dados',
          ],
        },
        {
          heading: '7. Retenção de Dados',
          paragraphs: [
            'Seus dados de saúde (prontuários) serão mantidos pelo prazo mínimo de 20 anos, conforme determinação do Conselho Federal de Fonoaudiologia e legislação sanitária, mesmo após o término do tratamento.',
          ],
        },
        {
          heading: '8. Encarregado de Proteção de Dados (DPO)',
          defs: [
            { label: 'Encarregado:', value: 'Dr. Gabriel Lechenakoski' },
            { label: 'E-mail:', value: 'gabriellechenakoski@gmail.com' },
            { label: 'Telefone:', value: '(41) 98445-1173' },
          ],
        },
        {
          heading: '9. Alterações desta Política',
          paragraphs: [
            'Esta política pode ser atualizada. As alterações serão comunicadas por e-mail ou publicadas neste site com 15 dias de antecedência.',
          ],
        },
      ],
    },
  },
};

const es: Dict = {
  langName: 'Español',
  header: {
    brandSubtitle: 'Fonoaudiología',
    ctaSchedule: 'Reservar Consulta',
    logoAria: 'Gabriel Lechenakoski - Página de inicio',
    langSwitcherAria: 'Seleccionar idioma',
  },
  schedule: {
    weekdays: 'Lun - Vie',
    saturday: 'Sábado',
    sunday: 'Domingo',
    weekdayHours: '08:30 - 18:00',
    saturdayHours: '08:30 - 12:00',
    closed: 'Cerrado',
  },
  hero: {
    eyebrow: 'Bienvenido a tu nueva voz',
    title: 'Fonoaudiología de Excelencia para Todas las Edades',
    subtitle:
      'Transforma tu comunicación y calidad de vida con tratamientos personalizados y basados en evidencia científica.',
    ctaPrimary: 'Agenda tu Evaluación',
    ctaPrimaryAria: 'Agendar evaluación por WhatsApp',
    ctaSecondary: 'Nuestros Servicios',
    languagesLabel: 'Atención en',
  },
  specialtiesSection: {
    eyebrow: 'Nuestras Especialidades',
    title: 'Soluciones Completas en Fonoaudiología',
    subtitle:
      'Ofrecemos tratamientos personalizados para atender las necesidades específicas de cada paciente, desde niños hasta adultos mayores.',
    learnMore: 'Saber más',
    learnMoreAria: 'Saber más sobre {title} por WhatsApp',
  },
  specialties: {
    pac: {
      title: 'PAC',
      description:
        'Procesamiento Auditivo Central — evaluación y tratamiento de dificultades en el procesamiento auditivo',
    },
    language: {
      title: 'Lenguaje oral/escrito',
      description: 'Desarrollo de la comunicación, lectura y escritura en todas las etapas de la vida',
    },
    voice: {
      title: 'Voz',
      description: 'Evaluación y tratamiento de cuestiones vocales para profesionales y pacientes en general',
    },
  },
  about: {
    eyebrow: 'Conoce al Especialista',
    title: 'Dedicación y Experiencia a tu Alcance',
    paragraph:
      'Con años de experiencia clínica, el Dr. Gabriel Lechenakoski combina conocimiento técnico avanzado con un enfoque humanizado.',
    featureTitle: 'Atención Personalizada',
    featureDesc: 'Cada paciente es único, y nuestros planes de tratamiento reflejan esa individualidad.',
    statYearsValue: 'Años',
    statYearsLabel: 'de Experiencia',
    statPatientsValue: 'Cientos',
    statPatientsLabel: 'de Pacientes',
  },
  testimonialsSection: {
    eyebrow: 'Testimonios',
    title: 'Lo Que Dicen Nuestros Pacientes',
  },
  testimonials: [
    {
      text: "Antes de Gabriel, mi hijo parecía estar siempre 'en las nubes' y no entendía órdenes simples. Después de la rehabilitación del PAC, su atención cambió por completo. ¡Es otro niño en la escuela!",
      author: 'Madre de Lucas',
      role: '8 años',
    },
    {
      text: 'Siempre pensé que tenía un problema de audición, pero los exámenes salían normales. Gabriel identificó la cuestión del PAC y, con el entrenamiento, hoy ya no me siento cansada en ambientes ruidosos. ¡Lo recomiendo mucho!',
      author: 'Mariana',
      role: 'Paciente Adulta',
    },
    {
      text: 'La atención de Gabriel es diferente. No se enfoca solo en el consultorio: habló con la maestra de mi hijo y nos dio todo el apoyo. Por fin escuchamos las primeras frases de forma clara.',
      author: 'Fernanda',
      role: 'Madre de Pedro',
    },
    {
      text: "Lo que más nos encantó fue la atención humanizada. Gabriel tiene una paciencia y una forma de tratar a los niños que convierte la terapia en diversión. ¡Mi hijo adora ir a la 'clase' de Gabriel!",
      author: 'Ricardo',
      role: 'Padre de Arthur',
    },
    {
      text: 'Mi voz se cansaba muy rápido en el trabajo. Con las técnicas y el acompañamiento de Gabriel, aprendí a usar mi voz sin esfuerzo. Profesional excelente y muy ético.',
      author: 'Juliana',
      role: 'Profesora',
    },
    {
      text: 'Gabriel fue el puente que faltaba entre nosotros y la escuela. Explicó lo que le ocurría a nuestra hija de una forma que nadie había hecho antes. Sentimos un apoyo total en este camino.',
      author: 'Familia Silva',
      role: 'Padres de paciente',
    },
  ],
  footer: {
    about:
      'Comprometidos a mejorar la calidad de vida a través de una comunicación eficaz. Atención humanizada y especializada.',
    contactTitle: 'Contacto',
    scheduleTitle: 'Horarios',
    rights: 'Todos los derechos reservados.',
    termsLink: 'Términos de Uso',
    privacyLink: 'Política de Privacidad',
    instagramAria: 'Instagram del Dr. Gabriel Lechenakoski',
  },
  whatsapp: {
    floatAria: 'Hablar por WhatsApp',
    message: 'Hola, me gustaría agendar una consulta',
  },
  meta: {
    home: {
      title: 'Dr. Gabriel Lechenakoski - Fonoaudiólogo en Curitiba | Dislexia, PAC y Lenguaje',
      description:
        'Fonoaudiólogo en Curitiba especializado en Dislexia, Procesamiento Auditivo Central (PAC) y Lenguaje. Atención humanizada para niños, adultos y adultos mayores.',
    },
    terms: {
      title: 'Términos de Uso | Dr. Gabriel Lechenakoski',
      description: 'Términos de uso del sitio del Dr. Gabriel Lechenakoski - Fonoaudiólogo en Curitiba.',
    },
    privacy: {
      title: 'Política de Privacidad | Dr. Gabriel Lechenakoski',
      description:
        'Política de Privacidad del sitio del Dr. Gabriel Lechenakoski en conformidad con la LGPD (ley brasileña de protección de datos).',
    },
  },
  legal: {
    backToHome: 'Volver a la página de inicio',
    lastUpdatedLabel: 'Fecha de la última actualización:',
    lastUpdatedDate: '15 de marzo de 2026',
    terms: {
      title: 'Términos de Uso',
      sections: [
        {
          heading: '1. Objetivo del Sitio',
          paragraphs: [
            'Este sitio tiene como finalidad proporcionar información sobre los servicios fonoaudiológicos ofrecidos por el Dr. Gabriel Lechenakoski, facilitar la reserva de citas y compartir contenido educativo sobre la salud de la comunicación y la audición.',
          ],
        },
        {
          heading: '2. Limitación de Responsabilidad',
          paragraphs: [
            'La información disponible en este sitio tiene carácter educativo e informativo y no sustituye, en ningún caso, la consulta fonoaudiológica, médica u otros profesionales de la salud.',
            'El Dr. Gabriel Lechenakoski no se responsabiliza por decisiones tomadas con base exclusivamente en la información contenida en este sitio.',
          ],
        },
        {
          heading: '3. Propiedad Intelectual',
          paragraphs: [
            'Todo el contenido de este sitio, incluyendo textos, imágenes, videos, diseño y marca, está protegido por las leyes de derechos de autor y propiedad intelectual.',
            'Queda prohibida la reproducción, distribución o modificación de cualquier contenido sin autorización expresa del Dr. Gabriel Lechenakoski.',
          ],
        },
        {
          heading: '4. Uso Adecuado',
          paragraphs: ['El usuario se compromete a utilizar este sitio de manera ética y legal, absteniéndose de:'],
          list: [
            'Realizar actividades ilícitas o fraudulentas',
            'Enviar mensajes ofensivos o inadecuados',
            'Intentar vulnerar la seguridad del sitio',
            'Reproducir contenido sin autorización',
          ],
        },
        {
          heading: '5. Reservas',
          paragraphs: ['Las reservas realizadas a través de este sitio siguen las siguientes reglas:'],
          list: [
            'Confirmar la cita con al menos 24 horas de antelación',
            'Las cancelaciones deben hacerse con al menos 12 horas de antelación',
            'La inasistencia sin cancelación podrá estar sujeta a multa',
            'Horarios sujetos a disponibilidad',
          ],
        },
        {
          heading: '6. Disponibilidad del Servicio',
          paragraphs: [
            'El sitio estará disponible 24/7, salvo por mantenimientos programados o problemas técnicos fuera de nuestro control. El tiempo de respuesta para contactos y reservas es de hasta 48 horas hábiles.',
          ],
        },
        {
          heading: '7. Cambios en los Términos',
          paragraphs: [
            'Estos términos pueden modificarse en cualquier momento. Los cambios entrarán en vigor inmediatamente después de su publicación en el sitio.',
          ],
        },
        {
          heading: '8. Ley Aplicable',
          paragraphs: [
            'Estos términos se rigen por las leyes brasileñas. Cualquier disputa se resolverá en el fuero de la comarca de Curitiba - PR, Brasil.',
          ],
        },
      ],
    },
    privacy: {
      title: 'Política de Privacidad',
      complianceNote:
        'Esta política cumple con la Ley General de Protección de Datos de Brasil (LGPD) - Ley n.º 13.709/2018 y los reglamentos aplicables al área de la salud.',
      sections: [
        {
          heading: '1. Datos Recopilados',
          paragraphs: ['Recopilamos y tratamos los siguientes datos personales:'],
          defs: [
            { label: 'Datos de identificación:', value: 'Nombre completo, CPF (documento brasileño), fecha de nacimiento' },
            { label: 'Datos de contacto:', value: 'Teléfono, correo electrónico, dirección' },
            { label: 'Datos de salud:', value: 'Historial clínico, quejas, diagnósticos, evoluciones terapéuticas' },
            { label: 'Datos de las citas:', value: 'Horarios, frecuencia, cancelaciones' },
          ],
        },
        {
          heading: '2. Finalidad del Tratamiento',
          paragraphs: ['Sus datos se utilizan para:'],
          list: [
            'Prestación de servicios fonoaudiológicos',
            'Reserva y gestión de citas',
            'Elaboración de historiales y evoluciones clínicas',
            'Comunicación sobre consultas y orientaciones',
            'Cumplimiento de obligaciones legales del área de la salud',
            'Facturación y gestión administrativa',
          ],
        },
        {
          heading: '3. Base Legal',
          paragraphs: ['El tratamiento de sus datos personales se basa en:'],
          list: [
            'Para el ejercicio de la profesión: Art. 7, II, de la LGPD',
            'Para la protección de la vida: Art. 11, II, g, de la LGPD (datos sensibles)',
            'Para la tutela de la salud: Art. 11, II, f, de la LGPD (datos sensibles)',
            'Cuando es necesario para la atención: Art. 7, III, de la LGPD',
          ],
        },
        {
          heading: '4. Compartición de Datos',
          paragraphs: ['Sus datos no se venden ni se comparten con terceros, excepto en las siguientes situaciones:'],
          list: [
            'Con profesionales del equipo clínico (con consentimiento)',
            'Con médicos y otros profesionales de la salud (con autorización)',
            'Con autoridades sanitarias (por determinación legal o judicial)',
            'Con seguros de salud (cuando es necesario para autorizaciones)',
            'Con sistemas de gestión clínica (procesamiento seguro)',
          ],
        },
        {
          heading: '5. Medidas de Seguridad',
          paragraphs: ['Adoptamos rigurosas medidas de seguridad:'],
          list: [
            'Cifrado de datos en tránsito y en reposo',
            'Acceso restringido y autenticado',
            'Copias de seguridad regulares y seguras',
            'Monitoreo de actividades sospechosas',
            'Capacitación del equipo en protección de datos',
          ],
        },
        {
          heading: '6. Derechos del Titular',
          paragraphs: ['Usted tiene los siguientes derechos:'],
          list: [
            'Confirmar la existencia del tratamiento',
            'Acceder a sus datos personales',
            'Corregir datos incompletos o inexactos',
            'Solicitar la anonimización o eliminación',
            'Revocar el consentimiento',
            'Ser informado sobre la compartición de datos',
          ],
        },
        {
          heading: '7. Retención de Datos',
          paragraphs: [
            'Sus datos de salud (historiales) se conservarán por un plazo mínimo de 20 años, conforme a la determinación del Consejo Federal de Fonoaudiología y la legislación sanitaria, incluso después de finalizado el tratamiento.',
          ],
        },
        {
          heading: '8. Encargado de Protección de Datos (DPO)',
          defs: [
            { label: 'Encargado:', value: 'Dr. Gabriel Lechenakoski' },
            { label: 'Correo electrónico:', value: 'gabriellechenakoski@gmail.com' },
            { label: 'Teléfono:', value: '(41) 98445-1173' },
          ],
        },
        {
          heading: '9. Cambios en esta Política',
          paragraphs: [
            'Esta política puede ser actualizada. Los cambios se comunicarán por correo electrónico o se publicarán en este sitio con 15 días de antelación.',
          ],
        },
      ],
    },
  },
};

const en: Dict = {
  langName: 'English',
  header: {
    brandSubtitle: 'Speech Therapy',
    ctaSchedule: 'Book Appointment',
    logoAria: 'Gabriel Lechenakoski - Home',
    langSwitcherAria: 'Select language',
  },
  schedule: {
    weekdays: 'Mon - Fri',
    saturday: 'Saturday',
    sunday: 'Sunday',
    weekdayHours: '08:30 - 18:00',
    saturdayHours: '08:30 - 12:00',
    closed: 'Closed',
  },
  hero: {
    eyebrow: 'Welcome to your new voice',
    title: 'Excellence in Speech Therapy for All Ages',
    subtitle:
      'Transform your communication and quality of life with personalized, evidence-based treatments.',
    ctaPrimary: 'Book your Assessment',
    ctaPrimaryAria: 'Book assessment via WhatsApp',
    ctaSecondary: 'Our Services',
    languagesLabel: 'Service in',
  },
  specialtiesSection: {
    eyebrow: 'Our Specialties',
    title: 'Complete Speech Therapy Solutions',
    subtitle:
      'We offer personalized treatments to meet the specific needs of each patient, from children to seniors.',
    learnMore: 'Learn more',
    learnMoreAria: 'Learn more about {title} on WhatsApp',
  },
  specialties: {
    pac: {
      title: 'Auditory Processing (CAPD)',
      description: 'Assessment and treatment of central auditory processing difficulties',
    },
    language: {
      title: 'Oral/Written Language',
      description: 'Developing communication, reading and writing at every stage of life',
    },
    voice: {
      title: 'Voice',
      description: 'Assessment and treatment of voice issues for professionals and the general public',
    },
  },
  about: {
    eyebrow: 'Meet the Specialist',
    title: 'Dedication and Experience Within Your Reach',
    paragraph:
      'With years of clinical experience, Dr. Gabriel Lechenakoski combines advanced technical knowledge with a humanized approach.',
    featureTitle: 'Personalized Care',
    featureDesc: 'Each patient is unique, and our treatment plans reflect that individuality.',
    statYearsValue: 'Years',
    statYearsLabel: 'of Experience',
    statPatientsValue: 'Hundreds',
    statPatientsLabel: 'of Patients',
  },
  testimonialsSection: {
    eyebrow: 'Testimonials',
    title: 'What Our Patients Say',
  },
  testimonials: [
    {
      text: "Before Gabriel, my son always seemed to be 'in his own world' and couldn't follow simple instructions. After the auditory processing rehab, his attention changed completely. He's a different boy at school!",
      author: "Lucas's mother",
      role: 'Age 8',
    },
    {
      text: 'I always thought I had a hearing problem, but the tests came back normal. Gabriel identified the auditory processing issue and, with the training, I no longer feel exhausted in noisy environments. Highly recommend!',
      author: 'Mariana',
      role: 'Adult Patient',
    },
    {
      text: "Gabriel's care is one of a kind. He doesn't focus only on the office — he spoke with my son's teacher and gave us full support. We finally heard his first clear sentences.",
      author: 'Fernanda',
      role: "Pedro's mother",
    },
    {
      text: "What charmed us most was the humanized care. Gabriel has a patience and a way with children that turns therapy into fun. My son loves going to Gabriel's 'class'!",
      author: 'Ricardo',
      role: "Arthur's father",
    },
    {
      text: 'My voice tired very quickly at work. With Gabriel’s techniques and follow-up, I learned to use my voice effortlessly. An excellent and highly ethical professional.',
      author: 'Juliana',
      role: 'Teacher',
    },
    {
      text: 'Gabriel was the missing bridge between us and the school. He explained what was happening with our daughter in a way no one had before. We felt fully supported on this journey.',
      author: 'The Silva Family',
      role: 'Parents of a patient',
    },
  ],
  footer: {
    about:
      'Committed to improving quality of life through effective communication. Humanized, specialized care.',
    contactTitle: 'Contact',
    scheduleTitle: 'Hours',
    rights: 'All rights reserved.',
    termsLink: 'Terms of Use',
    privacyLink: 'Privacy Policy',
    instagramAria: "Dr. Gabriel Lechenakoski's Instagram",
  },
  whatsapp: {
    floatAria: 'Chat on WhatsApp',
    message: "Hello, I'd like to book an appointment",
  },
  meta: {
    home: {
      title: 'Dr. Gabriel Lechenakoski - Speech Therapist in Curitiba | Dyslexia, Auditory Processing & Language',
      description:
        'English-speaking speech therapist in Curitiba, Brazil, specializing in dyslexia, central auditory processing (CAPD) and language. Humanized care for children, adults and seniors.',
    },
    terms: {
      title: 'Terms of Use | Dr. Gabriel Lechenakoski',
      description: "Terms of use for Dr. Gabriel Lechenakoski's website - Speech therapist in Curitiba.",
    },
    privacy: {
      title: 'Privacy Policy | Dr. Gabriel Lechenakoski',
      description:
        "Privacy Policy for Dr. Gabriel Lechenakoski's website, compliant with Brazil's data protection law (LGPD).",
    },
  },
  legal: {
    backToHome: 'Back to homepage',
    lastUpdatedLabel: 'Last updated:',
    lastUpdatedDate: 'March 15, 2026',
    terms: {
      title: 'Terms of Use',
      sections: [
        {
          heading: '1. Purpose of the Site',
          paragraphs: [
            'This website aims to provide information about the speech therapy services offered by Dr. Gabriel Lechenakoski, facilitate appointment booking, and share educational content about communication and hearing health.',
          ],
        },
        {
          heading: '2. Limitation of Liability',
          paragraphs: [
            'The information provided on this website is educational and informational in nature and in no way replaces a consultation with a speech therapist, physician, or other healthcare professionals.',
            'Dr. Gabriel Lechenakoski is not responsible for decisions made based solely on the information contained on this website.',
          ],
        },
        {
          heading: '3. Intellectual Property',
          paragraphs: [
            'All content on this website, including text, images, videos, design, and brand, is protected by copyright and intellectual property laws.',
            'Reproduction, distribution, or modification of any content without the express authorization of Dr. Gabriel Lechenakoski is prohibited.',
          ],
        },
        {
          heading: '4. Proper Use',
          paragraphs: ['The user agrees to use this website in an ethical and lawful manner, refraining from:'],
          list: [
            'Carrying out illegal or fraudulent activities',
            'Sending offensive or inappropriate messages',
            "Attempting to breach the site's security",
            'Reproducing content without authorization',
          ],
        },
        {
          heading: '5. Appointments',
          paragraphs: ['Appointments made through this website follow these rules:'],
          list: [
            'Confirm the appointment at least 24 hours in advance',
            'Cancellations must be made at least 12 hours in advance',
            'No-shows without cancellation may be subject to a fee',
            'Times subject to availability',
          ],
        },
        {
          heading: '6. Service Availability',
          paragraphs: [
            'The website will be available 24/7, except for scheduled maintenance or technical issues beyond our control. Response time for inquiries and appointments is up to 48 business hours.',
          ],
        },
        {
          heading: '7. Changes to the Terms',
          paragraphs: [
            'These terms may be changed at any time. Changes take effect immediately upon publication on the website.',
          ],
        },
        {
          heading: '8. Governing Law',
          paragraphs: [
            'These terms are governed by Brazilian law. Any disputes will be resolved in the courts of Curitiba - PR, Brazil.',
          ],
        },
      ],
    },
    privacy: {
      title: 'Privacy Policy',
      complianceNote:
        "This policy complies with Brazil's General Data Protection Law (LGPD) - Law No. 13,709/2018 and regulations applicable to the healthcare field.",
      sections: [
        {
          heading: '1. Data Collected',
          paragraphs: ['We collect and process the following personal data:'],
          defs: [
            { label: 'Identification data:', value: 'Full name, CPF (Brazilian tax ID), date of birth' },
            { label: 'Contact data:', value: 'Phone, email, address' },
            { label: 'Health data:', value: 'Clinical history, complaints, diagnoses, therapeutic progress' },
            { label: 'Appointment data:', value: 'Schedules, frequency, cancellations' },
          ],
        },
        {
          heading: '2. Purpose of Processing',
          paragraphs: ['Your data is used to:'],
          list: [
            'Provide speech therapy services',
            'Schedule and manage appointments',
            'Prepare clinical records and progress notes',
            'Communicate about appointments and guidance',
            'Comply with legal obligations in the healthcare field',
            'Handle billing and administrative management',
          ],
        },
        {
          heading: '3. Legal Basis',
          paragraphs: ['The processing of your personal data is based on:'],
          list: [
            'For the exercise of the profession: Art. 7, II, LGPD',
            'For the protection of life: Art. 11, II, g, LGPD (sensitive data)',
            'For the protection of health: Art. 11, II, f, LGPD (sensitive data)',
            'When necessary for care: Art. 7, III, LGPD',
          ],
        },
        {
          heading: '4. Data Sharing',
          paragraphs: ['Your data is not sold or shared with third parties, except in the following situations:'],
          list: [
            'With clinical team professionals (with consent)',
            'With physicians and other healthcare professionals (with authorization)',
            'With health authorities (by legal or judicial order)',
            'With health insurance providers (when needed for authorizations)',
            'With clinical management systems (secure processing)',
          ],
        },
        {
          heading: '5. Security Measures',
          paragraphs: ['We adopt strict security measures:'],
          list: [
            'Encryption of data in transit and at rest',
            'Restricted, authenticated access',
            'Regular, secure backups',
            'Monitoring of suspicious activity',
            'Staff training in data protection',
          ],
        },
        {
          heading: '6. Data Subject Rights',
          paragraphs: ['You have the following rights:'],
          list: [
            'Confirm the existence of processing',
            'Access your personal data',
            'Correct incomplete or inaccurate data',
            'Request anonymization or deletion',
            'Withdraw consent',
            'Be informed about data sharing',
          ],
        },
        {
          heading: '7. Data Retention',
          paragraphs: [
            'Your health data (clinical records) will be kept for a minimum of 20 years, as determined by the Federal Council of Speech Therapy and health legislation, even after treatment ends.',
          ],
        },
        {
          heading: '8. Data Protection Officer (DPO)',
          defs: [
            { label: 'Officer:', value: 'Dr. Gabriel Lechenakoski' },
            { label: 'Email:', value: 'gabriellechenakoski@gmail.com' },
            { label: 'Phone:', value: '(41) 98445-1173' },
          ],
        },
        {
          heading: '9. Changes to this Policy',
          paragraphs: [
            'This policy may be updated. Changes will be communicated by email or published on this website 15 days in advance.',
          ],
        },
      ],
    },
  },
};

export const translations: Record<Lang, Dict> = { pt, es, en };
