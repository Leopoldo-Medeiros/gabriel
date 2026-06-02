import { useTranslation } from '../i18n/LanguageContext';
import LegalPage from './LegalPage';

const TermosDeUso: React.FC = () => {
  const t = useTranslation();

  return (
    <LegalPage
      doc={t.legal.terms}
      metaTitle={t.meta.terms.title}
      metaDescription={t.meta.terms.description}
      path="termos-de-uso"
    />
  );
};

export default TermosDeUso;
