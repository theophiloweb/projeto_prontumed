// Componente principal da página inicial
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-white">
      {/* Hero section */}
      <div className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-6">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block text-blue-600">prontuMed</span>
                <span className="block text-3xl mt-3">Seu prontuário médico digital</span>
              </h1>
              <p className="mt-6 text-lg text-gray-600">
                Acesso seguro e simplificado às suas informações médicas. 
                Compartilhe seu histórico com profissionais de saúde de forma 
                rápida e controlada através do nosso sistema de token.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/login"
                  className="rounded-md bg-blue-600 px-5 py-3 text-base font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Acessar Sistema
                </Link>
                <Link
                  href="/sobre"
                  className="rounded-md bg-white px-5 py-3 text-base font-medium text-blue-600 shadow-sm ring-1 ring-blue-600 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Saiba mais
                </Link>
              </div>
            </div>
            <div className="mt-12 lg:mt-0 lg:col-span-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-blue-100 rounded-full w-72 h-72 opacity-30"></div>
                </div>
                <div className="relative">
                  <Image
                    src="/images/medical_record_hero.svg"
                    alt="Prontuário Médico Digital"
                    width={600}
                    height={400}
                    className="rounded-lg shadow-xl"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features section */}
      <div className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base font-semibold text-blue-600 uppercase tracking-wide">Funcionalidades</h2>
            <p className="mt-1 text-3xl font-extrabold text-gray-900 sm:text-4xl sm:tracking-tight">
              Tudo o que você precisa em um prontuário digital
            </p>
            <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
              O prontuMed oferece uma solução completa para o gerenciamento de informações médicas.
            </p>
          </div>

          <div className="mt-16">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {/* Feature 1 */}
              <div className="bg-blue-50 rounded-lg p-6 border border-blue-100">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white mb-4">
                  <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-gray-900">Segurança e Privacidade</h3>
                <p className="mt-2 text-base text-gray-600">
                  Seus dados médicos são protegidos com as mais avançadas tecnologias de segurança, 
                  garantindo total confidencialidade das suas informações.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="bg-blue-50 rounded-lg p-6 border border-blue-100">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white mb-4">
                  <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-gray-900">Compartilhamento por Token</h3>
                <p className="mt-2 text-base text-gray-600">
                  Gere tokens temporários para compartilhar seu prontuário com profissionais de saúde 
                  de forma segura e controlada, apenas quando necessário.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="bg-blue-50 rounded-lg p-6 border border-blue-100">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white mb-4">
                  <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-gray-900">Histórico Completo</h3>
                <p className="mt-2 text-base text-gray-600">
                  Mantenha um registro organizado de consultas, exames, diagnósticos e prescrições, 
                  facilitando o acompanhamento da sua saúde ao longo do tempo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonial section */}
      <div className="bg-blue-700">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8">
            <div>
              <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                Transformando o acesso à saúde
              </h2>
              <p className="mt-4 text-lg text-blue-100">
                O prontuMed está revolucionando a forma como pacientes e profissionais de saúde 
                interagem com informações médicas, tornando o processo mais eficiente e seguro.
              </p>
            </div>
            <div className="mt-8 lg:mt-0">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="px-6 py-8">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 bg-blue-500 rounded-full p-2">
                      <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900">Dr. Carlos Mendes</h3>
                      <p className="text-base text-gray-500">Clínico Geral</p>
                    </div>
                  </div>
                  <div className="mt-4 text-base text-gray-600">
                    <p>
                      "O prontuMed revolucionou minha prática clínica. Ter acesso rápido ao histórico 
                      completo dos pacientes através do sistema de token me permite tomar decisões mais 
                      precisas e oferecer um atendimento personalizado."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA section */}
      <div className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="bg-blue-50 rounded-lg shadow-lg overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4">
            <div className="px-6 pt-10 pb-12 sm:px-12 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
              <div className="lg:self-center">
                <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                  <span className="block">Pronto para começar?</span>
                  <span className="block text-blue-600">Acesse agora o prontuMed</span>
                </h2>
                <p className="mt-4 text-lg leading-6 text-gray-600">
                  Junte-se a milhares de pacientes e profissionais que já estão utilizando o prontuMed 
                  para gerenciar informações médicas de forma segura e eficiente.
                </p>
                <Link
                  href="/login"
                  className="mt-8 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
                >
                  Criar conta gratuita
                </Link>
              </div>
            </div>
            <div className="relative -mt-6 aspect-w-5 aspect-h-3 md:aspect-w-2 md:aspect-h-1">
              <div className="transform translate-x-6 translate-y-6 rounded-md object-cover object-left-top sm:translate-x-16 lg:translate-y-20">
                <div className="flex items-center justify-center h-full">
                  <svg className="h-32 w-32 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
