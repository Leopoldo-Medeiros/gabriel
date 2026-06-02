import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useLang } from '../i18n/LanguageContext';
import { usePageMeta } from '../hooks/usePageMeta';
import type { LegalDoc } from '../i18n/translations';

interface Props {
  doc: LegalDoc;
  metaTitle: string;
  metaDescription: string;
  path: string;
  titleIcon?: ReactNode;
  complianceNote?: string;
  sectionIcons?: (ReactNode | null)[];
}

const LegalPage: React.FC<Props> = ({
  doc,
  metaTitle,
  metaDescription,
  path,
  titleIcon,
  complianceNote,
  sectionIcons,
}) => {
  const { t, localePath } = useLang();
  usePageMeta({ title: metaTitle, description: metaDescription, path });

  return (
    <main className="min-h-screen bg-dark/5 py-12">
      <div className="container mx-auto px-6 max-w-4xl">
        <Link
          to={localePath('')}
          className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-8 transition-colors"
        >
          <ArrowLeft size={20} />
          {t.legal.backToHome}
        </Link>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center gap-3 mb-8">
            {titleIcon}
            <h1 className="text-3xl font-bold text-dark">{doc.title}</h1>
          </div>

          <div className="space-y-6 text-dark/80">
            {complianceNote && (
              <section className="bg-secondary p-4 rounded-lg border-l-4 border-primary">
                <p className="text-sm font-semibold text-primary">{complianceNote}</p>
              </section>
            )}

            {doc.sections.map((section, i) => (
              <section key={i}>
                <h2 className="text-xl font-semibold text-dark mb-3 flex items-center gap-2">
                  {sectionIcons?.[i]}
                  {section.heading}
                </h2>

                {section.paragraphs?.map((paragraph, j) => (
                  <p key={j} className="leading-relaxed mb-3 last:mb-0">
                    {paragraph}
                  </p>
                ))}

                {section.defs && (
                  <div className="bg-dark/5 p-4 rounded-lg space-y-2 text-dark/80 mt-3">
                    {section.defs.map((def, j) => (
                      <p key={j}>
                        <strong>{def.label}</strong> {def.value}
                      </p>
                    ))}
                  </div>
                )}

                {section.list && (
                  <ul className="list-disc list-inside space-y-2 ml-4 mt-3">
                    {section.list.map((item, j) => (
                      <li key={j}>{item}</li>
                    ))}
                  </ul>
                )}
              </section>
            ))}

            <div className="mt-8 pt-6 border-t border-dark/10">
              <p className="text-sm text-dark/60">
                <strong>{t.legal.lastUpdatedLabel}</strong> {t.legal.lastUpdatedDate}
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default LegalPage;
