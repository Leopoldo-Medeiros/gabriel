import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { usePageMeta } from '../hooks/usePageMeta';

const TermosDeUso: React.FC = () => {
  usePageMeta({
    title: 'Termos de Uso | Dr. Gabriel Lechenakoski',
    description: 'Termos de uso do site do Dr. Gabriel Lechenakoski - Fonoaudiólogo em Curitiba.',
    canonical: 'https://lechenakoski.com.br/termos-de-uso',
  });
  return (
    <main className="min-h-screen bg-dark/5 py-12">
      <div className="container mx-auto px-6 max-w-4xl">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-8 transition-colors"
        >
          <ArrowLeft size={20} />
          Voltar para página inicial
        </Link>
        
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-dark mb-8">Termos de Uso</h1>
          
          <div className="space-y-6 text-dark/80">
            <section>
              <h2 className="text-xl font-semibold text-dark mb-3">1. Objetivo do Site</h2>
              <p className="leading-relaxed">
                Este site tem como finalidade fornecer informações sobre os serviços fonoaudiológicos 
                oferecidos pelo Dr. Gabriel Lechenakoski, facilitar o agendamento de consultas e 
                compartilhar conteúdo educacional sobre saúde da comunicação e audição.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-dark mb-3">2. Limitação de Responsabilidade</h2>
              <p className="leading-relaxed mb-3">
                As informações disponibilizadas neste site têm caráter educacional e informativo, 
                não substituindo em hipótese alguma a consulta fonoaudiológica, médica ou outros 
                profissionais de saúde.
              </p>
              <p className="leading-relaxed">
                O Dr. Gabriel Lechenakoski não se responsabiliza por decisões tomadas com base 
                exclusivamente nas informações contidas neste site.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-dark mb-3">3. Propriedade Intelectual</h2>
              <p className="leading-relaxed mb-3">
                Todo o conteúdo deste site, incluindo textos, imagens, vídeos, design e marca, 
                é protegido pelas leis de direitos autorais e propriedade intelectual.
              </p>
              <p className="leading-relaxed">
                É proibida a reprodução, distribuição ou modificação de qualquer conteúdo sem 
                autorização expressa do Dr. Gabriel Lechenakoski.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-dark mb-3">4. Uso Adequado</h2>
              <p className="leading-relaxed mb-3">
                O usuário compromete-se a utilizar este site de maneira ética e legal,
                abstendo-se de:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Realizar atividades ilícitas ou fraudulentas</li>
                <li>Enviar mensagens ofensivas ou inadequadas</li>
                <li>Tentar violar a segurança do site</li>
                <li>Reproduzir conteúdo sem autorização</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-dark mb-3">5. Agendamentos</h2>
              <p className="leading-relaxed mb-3">
                Os agendamentos realizados através deste site seguem as seguintes regras:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Confirmar consulta com no mínimo 24 horas de antecedência</li>
                <li>Cancelamentos devem ser feitos com pelo menos 12 horas de antecedência</li>
                <li>Não comparecimento sem cancelamento poderá sujeitar a multa</li>
                <li>Horários sujeitos a disponibilidade</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-dark mb-3">6. Disponibilidade do Serviço</h2>
              <p className="leading-relaxed">
                O site estará disponível 24/7, exceto por manutenções programadas ou 
                problemas técnicos fora do nosso controle. O tempo de resposta para 
                contatos e agendamentos é de até 48 horas úteis.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-dark mb-3">7. Alterações nos Termos</h2>
              <p className="leading-relaxed">
                Estes termos podem ser alterados a qualquer momento. As alterações entrarão 
                em vigor imediatamente após sua publicação no site.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-dark mb-3">8. Lei Aplicável</h2>
              <p className="leading-relaxed">
                Estes termos são regidos pelas leis brasileiras. Quaisquer disputas serão 
                resolvidas no foro da comarca de Curitiba - PR.
              </p>
            </section>

            <div className="mt-8 pt-6 border-t border-dark/10">
              <p className="text-sm text-dark/60">
                <strong>Data da última atualização:</strong> 15 de março de 2026
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default TermosDeUso;
