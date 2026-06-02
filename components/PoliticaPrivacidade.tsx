import { Shield, Database, Eye, Lock } from 'lucide-react';
import { useTranslation } from '../i18n/LanguageContext';
import LegalPage from './LegalPage';

const PoliticaPrivacidade: React.FC = () => {
  const t = useTranslation();

  // Icons mirror the section order in translations.ts (privacy.sections).
  const sectionIcons = [
    <Database size={20} className="text-primary" />,
    <Eye size={20} className="text-primary" />,
    null,
    <Lock size={20} className="text-primary" />,
  ];

  return (
    <LegalPage
      doc={t.legal.privacy}
      complianceNote={t.legal.privacy.complianceNote}
      titleIcon={<Shield className="text-primary" size={32} />}
      sectionIcons={sectionIcons}
      metaTitle={t.meta.privacy.title}
      metaDescription={t.meta.privacy.description}
      path="politica-privacidade"
    />
  );
};

export default PoliticaPrivacidade;
