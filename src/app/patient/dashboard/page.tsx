'use client';

// Dashboard do paciente
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { getMockPatientDashboardData, generateMockToken } from '../../utils/mockData';

interface Exam {
  id: number;
  exam_name: string;
  exam_date: string;
  professional_name: string;
}

interface Consultation {
  id: number;
  consultation_date: string;
  professional_name: string;
  specialty: string;
}

interface Diagnosis {
  id: number;
  diagnosis_text: string;
  diagnosis_date: string;
  professional_name: string;
}

interface DashboardData {
  exams: Exam[];
  consultations: Consultation[];
  diagnoses: Diagnosis[];
}

export default function PatientDashboard() {
  const [user, setUser] = useState<any>(null);
  const [token, setToken] = useState<string | null>(null);
  const [dashboardData, setDashboardData] = useState<DashboardData>({
    exams: [],
    consultations: [],
    diagnoses: []
  });
  const [isLoading, setIsLoading] = useState(true);
  const [showToken, setShowToken] = useState(false);
  const [generatedToken, setGeneratedToken] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    // Verificar se o usuário está logado e é um paciente
    const storedUser = localStorage.getItem('user');
    const storedToken = localStorage.getItem('token');
    const userType = localStorage.getItem('userType');

    if (!storedUser || !storedToken || userType !== 'patient') {
      router.push('/login');
      return;
    }

    const parsedUser = JSON.parse(storedUser);
    setUser(parsedUser);
    setToken(storedToken);

    // Carregar dados do dashboard (usando dados falsos)
    const mockData = getMockPatientDashboardData(parsedUser.id);
    setDashboardData(mockData);
    setIsLoading(false);
  }, [router]);

  const handleGenerateToken = () => {
    // Gerar token falso
    const newToken = generateMockToken();
    setGeneratedToken(newToken);
    setShowToken(true);
  };

  const handlePrintDiagnoses = () => {
    window.print();
  };

  const handlePrintMedicalRecord = () => {
    window.print();
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[calc(100vh-8rem)]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-semibold text-gray-900">Olá, {user?.full_name}</h1>
          
          <div className="flex space-x-2">
            <button
              onClick={handleGenerateToken}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              Gerar Token
            </button>
          </div>
        </div>

        {showToken && generatedToken && (
          <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-md">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-lg font-medium text-green-800">Token gerado com sucesso!</h3>
                <p className="mt-1 text-sm text-green-700">
                  Compartilhe este token com o profissional de saúde para permitir acesso ao seu prontuário.
                  <br />
                  <span className="font-mono font-bold">{generatedToken}</span>
                </p>
                <p className="mt-1 text-xs text-green-600">Este token é válido por 1 hora.</p>
              </div>
              <button
                onClick={() => setShowToken(false)}
                className="text-green-700 hover:text-green-900"
              >
                <span className="sr-only">Fechar</span>
                <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
        )}

        <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-1 lg:grid-cols-3">
          {/* Últimos Exames */}
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h2 className="text-lg font-medium text-gray-900 mb-4">Últimos Exames</h2>
              <div className="flow-root">
                <ul className="-my-5 divide-y divide-gray-200">
                  {dashboardData.exams.map((exam) => (
                    <li key={exam.id} className="py-4">
                      <div className="flex items-center space-x-4">
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-gray-900 truncate">{exam.exam_name}</p>
                          <p className="text-sm text-gray-500">
                            {new Date(exam.exam_date).toLocaleDateString('pt-BR')} • {exam.professional_name}
                          </p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Últimas Consultas */}
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h2 className="text-lg font-medium text-gray-900 mb-4">Últimas Consultas</h2>
              <div className="flow-root">
                <ul className="-my-5 divide-y divide-gray-200">
                  {dashboardData.consultations.map((consultation) => (
                    <li key={consultation.id} className="py-4">
                      <div className="flex items-center space-x-4">
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-gray-900 truncate">{consultation.professional_name}</p>
                          <p className="text-sm text-gray-500">
                            {new Date(consultation.consultation_date).toLocaleDateString('pt-BR')} • {consultation.specialty}
                          </p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Diagnósticos Simples */}
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h2 className="text-lg font-medium text-gray-900 mb-4">Diagnósticos Simples</h2>
              <div className="flow-root">
                <ul className="-my-5 divide-y divide-gray-200">
                  {dashboardData.diagnoses.map((diagnosis) => (
                    <li key={diagnosis.id} className="py-4">
                      <div className="flex items-center space-x-4">
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-gray-900 truncate">{diagnosis.diagnosis_text}</p>
                          <p className="text-sm text-gray-500">
                            {new Date(diagnosis.diagnosis_date).toLocaleDateString('pt-BR')} • {diagnosis.professional_name}
                          </p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Botões de impressão */}
        <div className="mt-8 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <button
            onClick={handlePrintDiagnoses}
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Imprimir Diagnósticos
          </button>
          <button
            onClick={handlePrintMedicalRecord}
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Imprimir Prontuário
          </button>
        </div>
      </div>
    </div>
  );
}
