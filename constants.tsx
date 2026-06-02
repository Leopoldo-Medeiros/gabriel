export const WHATSAPP_NUMBER = "5541984451173";
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Olá, gostaria de agendar uma consulta")}`;

export const CONTACT_INFO = {
  phone: "(41) 98445-1173",
  address: "Rua das Flores, 123 - Curitiba/PR",
  addressFull: "Rua das Flores, 123 Centro, Curitiba - PR",
  email: "gabriellechenakoski@gmail.com"
};

// Translatable copy (title/description) lives in i18n/translations.ts under `specialties`,
// keyed by `key`. Only the non-translatable image stays here.
export const SPECIALTIES = [
  {
    key: "pac",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop&crop=center"
  },
  {
    key: "language",
    image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=400&h=300"
  },
  {
    key: "voice",
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop&crop=center"
  }
];
