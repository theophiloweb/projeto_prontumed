// Componente de rodapé
export default function Footer() {
  return (
    <footer className="bg-gray-100 border-t">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-600 text-sm">
              © {new Date().getFullYear()} prontuMed - Sistema Global de Prontuário Médico
            </p>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-gray-700 text-sm">
              Termos de Uso
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-700 text-sm">
              Política de Privacidade
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-700 text-sm">
              Suporte
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
