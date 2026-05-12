import React from 'react';
import { ArrowLeft, Shield, Lock, Eye, Database } from 'lucide-react';

const PoliticaPrivacidade: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#253B5F]/5 py-12">
      <div className="container mx-auto px-6 max-w-4xl">
        <a 
          href="/" 
          className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-8 transition-colors"
        >
          <ArrowLeft size={20} />
          Voltar para página inicial
        </a>
        
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center gap-3 mb-8">
            <Shield className="text-primary" size={32} />
            <h1 className="text-3xl font-bold text-dark">Política de Privacidade</h1>
          </div>
          
          <div className="space-y-6 text-[#253B5F]/80">
            <section className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
              <p className="text-sm font-semibold text-blue-800">
                Esta política está em conformidade com a Lei Geral de Proteção de Dados (LGPD) - 
                Lei nº 13.709/2018 e regulamentos aplicáveis à área da saúde.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-dark mb-3 flex items-center gap-2">
                <Database size={20} className="text-primary" />
                1. Dados Coletados
              </h2>
              <p className="leading-relaxed mb-3">
                Coletamos e tratamos os seguintes dados pessoais:
              </p>
              <div className="bg-[#253B5F]/5 p-4 rounded-lg space-y-2">
                <p><strong>Dados de identificação:</strong> Nome completo, CPF, data de nascimento</p>
                <p><strong>Dados de contato:</strong> Telefone, e-mail, endereço</p>
                <p><strong>Dados de saúde:</strong> Histórico clínico, queixas, diagnósticos, evoluções terapêuticas</p>
                <p><strong>Dados de agendamento:</strong> Horários, frequência, cancelamentos</p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-dark mb-3 flex items-center gap-2">
                <Eye size={20} className="text-primary" />
                2. Finalidade do Tratamento
              </h2>
              <p className="leading-relaxed mb-3">
                Seus dados são utilizados para:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Prestação de serviços fonoaudiológicos</li>
                <li>Agendamento e gestão de consultas</li>
                <li>Elaboração de prontuários e evoluções clínicas</li>
                <li>Comunicação sobre atendimentos e orientações</li>
                <li>Cumprimento de obrigações legais da área da saúde</li>
                <li>Faturamento e gestão administrativa</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-dark mb-3">3. Base Legal</h2>
              <p className="leading-relaxed">
                O tratamento de seus dados pessoais baseia-se:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Para o exercício de profissão:</strong> Art. 7º, II, da LGPD</li>
                <li><strong>Para proteção da vida:</strong> Art. 11, II, g, da LGPD (dados sensíveis)</li>
                <li><strong>Para tutela da saúde:</strong> Art. 11, II, f, da LGPD (dados sensíveis)</li>
                <li><strong>Quando necessário para atendimento:</strong> Art. 7º, III, da LGPD</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-dark mb-3 flex items-center gap-2">
                <Lock size={20} className="text-primary" />
                4. Compartilhamento de Dados
              </h2>
              <p className="leading-relaxed mb-3">
                Seus dados <strong>não são vendidos ou compartilhados com terceiros</strong>, 
                exceto nas seguintes situações:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Com profissionais da equipe clínica (com consentimento)</li>
                <li>Com médicos e outros profissionais de saúde (com autorização)</li>
                <li>Com autoridades de saúde (determinação legal/c judicial)</li>
                <li>Com planos de saúde (quanto necessário para autorizações)</li>
                <li>Com sistemas de gestão clínica (processamento seguro)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-dark mb-3">5. Medidas de Segurança</h2>
              <p className="leading-relaxed mb-3">
                Adotamos rigorosas medidas de segurança:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Criptografia de dados em trânsito e em repouso</li>
                <li>Acesso restrito e autenticado</li>
                <li>Backup regular e seguro</li>
                <li>Monitoramento de atividades suspeitas</li>
                <li>Treinamento da equipe em proteção de dados</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-dark mb-3">6. Direitos do Titular</h2>
              <p className="leading-relaxed mb-3">
                Você tem os seguintes direitos:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Confirmar</strong> a existência de tratamento</li>
                <li><strong>Acessar</strong> seus dados pessoais</li>
                <li><strong>Corrigir</strong> dados incompletos ou inexatos</li>
                <li><strong>Solicitar</strong> anonimização ou eliminação</li>
                <li><strong>Revogar</strong> o consentimento</li>
                <li><strong>Informar</strong> sobre compartilhamento de dados</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-dark mb-3">7. Retenção de Dados</h2>
              <p className="leading-relaxed">
                Seus dados de saúde (prontuários) serão mantidos pelo prazo mínimo de 20 anos, 
                conforme determinação do Conselho Federal de Fonoaudiologia e legislação sanitária, 
                mesmo após o término do tratamento.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-dark mb-3">8. Encarregado de Proteção de Dados (DPO)</h2>
              <div className="bg-[#253B5F]/5 p-4 rounded-lg">
                <p className="mb-2"><strong>Encarregado:</strong> Dr. Gabriel Lechenakoski</p>
                <p className="mb-2"><strong>E-mail:</strong> dpo@lechenakoski.com.br</p>
                <p><strong>Telefone:</strong> (41) 98445-1173</p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-dark mb-3">9. Alterações desta Política</h2>
              <p className="leading-relaxed">
                Esta política pode ser atualizada. As alterações serão comunicadas 
                por e-mail ou publicadas neste site com 15 dias de antecedência.
              </p>
            </section>

            <div className="mt-8 pt-6 border-t border-[#253B5F]/10">
              <p className="text-sm text-[#253B5F]/60">
                <strong>Data da última atualização:</strong> 15 de março de 2026
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PoliticaPrivacidade;
