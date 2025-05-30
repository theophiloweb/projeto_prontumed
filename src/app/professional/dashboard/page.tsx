'use client';

// Dashboard do profissional de saúde
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { getMockPatientMedicalRecord } from '../../utils/mockData';
import { mockValidateAccessToken } from '../../utils/mockAuth';

interface Patient {
  id: number;
  cpf: string;
  full_name: string;
  email: string;
}

interface MedicalRecord {
  patient: Patient;
  exams: any[];
  consultations: any[];
  diagnoses: any[];
  prescriptions: any[];
  notes: any[];
}

export default function ProfessionalDashboard() {
  const [user, setUser] = useState<any>(null);
  const [token, setToken] = useState<string | null>(null);
  const [patientToken, setPatientToken] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [patientRecord, setPatientRecord] = useState<MedicalRecord | null>(null);
  const [activeTab, setActiveTab] = useState('profile');
  const router = useRouter();

  useEffect(() => {
    // Verificar se o usuário está logado e é um profissional de saúde
    const storedUser = localStorage.getItem('user');
    const storedToken = localStorage.getItem('token');
    const userType = localStorage.getItem('userType');

    if (!storedUser || !storedToken || userType !== 'professional') {
      router.push('/login');
      return;
    }

    setUser(JSON.parse(storedUser));
    setToken(storedToken);
  }, [router]);

  const handleAccessPatientRecord = async () => {
    if (!patientToken.trim()) {
      setError('Por favor, insira um token válido');
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      // Simular validação do token
      const validation = mockValidateAccessToken(patientToken);
      
      if (!validation.valid) {
        throw new Error(validation.error);
      }
      
      // Buscar dados do prontuário usando o ID do paciente
      const patientId = validation.patient_id;
      const medicalRecord = getMockPatientMedicalRecord(patientId);
      
      setPatientRecord(medicalRecord);
      setIsLoading(false);
    } catch (err: any) {
      setIsLoading(false);
      setError(err.message || 'Erro ao acessar prontuário do paciente');
    }
  };

  const handleAddDiagnosis = () => {
    // Implementação simulada para adicionar diagnóstico
    alert('Funcionalidade para adicionar diagnóstico será implementada');
  };

  const handleAddPrescription = () => {
    // Implementação simulada para adicionar prescrição
    alert('Funcionalidade para adicionar prescrição será implementada');
  };

  const handleAddNote = () => {
    // Implementação simulada para adicionar anotação
    alert('Funcionalidade para adicionar anotação médica será implementada');
  };

  if (!user) {
    return (
      <div className="flex justify-center items-center min-h-[calc(100vh-8rem)]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-semibold text-gray-900">Olá, {user?.full_name}</h1>
        
        {!patientRecord ? (
          <div className="mt-6 bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h2 className="text-lg leading-6 font-medium text-gray-900">Acesso ao Prontuário do Paciente</h2>
              <div className="mt-2 max-w-xl text-sm text-gray-500">
                <p>Insira o token fornecido pelo paciente para acessar seu prontuário médico.</p>
              </div>
              <div className="mt-5 sm:flex sm:items-center">
                <div className="w-full sm:max-w-xs">
                  <label htmlFor="patient-token" className="sr-only">Token do Paciente</label>
                  <input
                    type="text"
                    name="patient-token"
                    id="patient-token"
                    className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    placeholder="Token do paciente"
                    value={patientToken}
                    onChange={(e) => setPatientToken(e.target.value)}
                  />
                </div>
                <button
                  type="button"
                  onClick={handleAccessPatientRecord}
                  disabled={isLoading}
                  className="mt-3 w-full inline-flex items-center justify-center px-4 py-2 border border-transparent shadow-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                >
                  {isLoading ? 'Acessando...' : 'Acessar Prontuário do Paciente'}
                </button>
              </div>
              {error && (
                <div className="mt-2 text-sm text-red-600">
                  {error}
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="mt-6">
            <div className="bg-white shadow overflow-hidden sm:rounded-lg">
              <div className="px-4 py-5 sm:px-6">
                <h2 className="text-lg leading-6 font-medium text-gray-900">
                  Prontuário de {patientRecord.patient.full_name}
                </h2>
                <p className="mt-1 max-w-2xl text-sm text-gray-500">
                  CPF: {patientRecord.patient.cpf}
                </p>
              </div>
              
              <div className="border-t border-gray-200">
                <div className="bg-gray-50 px-4 py-3">
                  <nav className="flex flex-wrap space-x-2 space-y-2 sm:space-y-0" aria-label="Tabs">
                    <button
                      onClick={() => setActiveTab('profile')}
                      className={`${
                        activeTab === 'profile'
                          ? 'bg-blue-100 text-blue-700'
                          : 'text-gray-500 hover:text-gray-700'
                      } px-3 py-2 font-medium text-sm rounded-md`}
                    >
                      Perfil
                    </button>
                    <button
                      onClick={() => setActiveTab('history')}
                      className={`${
                        activeTab === 'history'
                          ? 'bg-blue-100 text-blue-700'
                          : 'text-gray-500 hover:text-gray-700'
                      } px-3 py-2 font-medium text-sm rounded-md`}
                    >
                      Histórico Médico
                    </button>
                    <button
                      onClick={() => setActiveTab('diagnoses')}
                      className={`${
                        activeTab === 'diagnoses'
                          ? 'bg-blue-100 text-blue-700'
                          : 'text-gray-500 hover:text-gray-700'
                      } px-3 py-2 font-medium text-sm rounded-md`}
                    >
                      Diagnósticos
                    </button>
                    <button
                      onClick={() => setActiveTab('prescriptions')}
                      className={`${
                        activeTab === 'prescriptions'
                          ? 'bg-blue-100 text-blue-700'
                          : 'text-gray-500 hover:text-gray-700'
                      } px-3 py-2 font-medium text-sm rounded-md`}
                    >
                      Prescrições
                    </button>
                    <button
                      onClick={() => setActiveTab('exams')}
                      className={`${
                        activeTab === 'exams'
                          ? 'bg-blue-100 text-blue-700'
                          : 'text-gray-500 hover:text-gray-700'
                      } px-3 py-2 font-medium text-sm rounded-md`}
                    >
                      Exames
                    </button>
                    <button
                      onClick={() => setActiveTab('notes')}
                      className={`${
                        activeTab === 'notes'
                          ? 'bg-blue-100 text-blue-700'
                          : 'text-gray-500 hover:text-gray-700'
                      } px-3 py-2 font-medium text-sm rounded-md`}
                    >
                      Anotações
                    </button>
                  </nav>
                </div>
                
                <div className="px-4 py-5 sm:p-6">
                  {activeTab === 'profile' && (
                    <div>
                      <h3 className="text-lg font-medium text-gray-900 mb-4">Informações do Paciente</h3>
                      <dl className="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2">
                        <div>
                          <dt className="text-sm font-medium text-gray-500">Nome completo</dt>
                          <dd className="mt-1 text-sm text-gray-900">{patientRecord.patient.full_name}</dd>
                        </div>
                        <div>
                          <dt className="text-sm font-medium text-gray-500">CPF</dt>
                          <dd className="mt-1 text-sm text-gray-900">{patientRecord.patient.cpf}</dd>
                        </div>
                        <div>
                          <dt className="text-sm font-medium text-gray-500">Email</dt>
                          <dd className="mt-1 text-sm text-gray-900">{patientRecord.patient.email}</dd>
                        </div>
                      </dl>
                    </div>
                  )}
                  
                  {activeTab === 'history' && (
                    <div>
                      <div className="flex justify-between items-center mb-4">
                        <h3 className="text-lg font-medium text-gray-900">Histórico Médico Completo</h3>
                      </div>
                      <div className="space-y-6">
                        <div>
                          <h4 className="text-md font-medium text-gray-900">Consultas</h4>
                          <ul className="mt-2 divide-y divide-gray-200">
                            {patientRecord.consultations.map((consultation) => (
                              <li key={consultation.id} className="py-3">
                                <div className="flex flex-col">
                                  <span className="text-sm font-medium text-gray-900">
                                    {new Date(consultation.consultation_date).toLocaleDateString('pt-BR')} - {consultation.professional_name} ({consultation.specialty})
                                  </span>
                                  <span className="text-sm text-gray-500">{consultation.notes}</span>
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {activeTab === 'diagnoses' && (
                    <div>
                      <div className="flex justify-between items-center mb-4">
                        <h3 className="text-lg font-medium text-gray-900">Diagnósticos</h3>
                        <button
                          type="button"
                          onClick={handleAddDiagnosis}
                          className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        >
                          Adicionar Diagnóstico
                        </button>
                      </div>
                      <ul className="divide-y divide-gray-200">
                        {patientRecord.diagnoses.map((diagnosis) => (
                          <li key={diagnosis.id} className="py-3">
                            <div className="flex flex-col">
                              <span className="text-sm font-medium text-gray-900">{diagnosis.diagnosis_text}</span>
                              <span className="text-sm text-gray-500">
                                {new Date(diagnosis.diagnosis_date).toLocaleDateString('pt-BR')} - {diagnosis.professional_name}
                              </span>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  {activeTab === 'prescriptions' && (
                    <div>
                      <div className="flex justify-between items-center mb-4">
                        <h3 className="text-lg font-medium text-gray-900">Prescrições</h3>
                        <button
                          type="button"
                          onClick={handleAddPrescription}
                          className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        >
                          Adicionar Prescrição
                        </button>
                      </div>
                      <ul className="divide-y divide-gray-200">
                        {patientRecord.prescriptions.map((prescription) => (
                          <li key={prescription.id} className="py-3">
                            <div className="flex flex-col">
                              <span className="text-sm font-medium text-gray-900">{prescription.medication_name}</span>
                              <span className="text-sm text-gray-500">
                                Dosagem: {prescription.dosage} - Frequência: {prescription.frequency} - Duração: {prescription.duration}
                              </span>
                              <span className="text-sm text-gray-500">
                                {new Date(prescription.prescription_date).toLocaleDateString('pt-BR')} - {prescription.professional_name}
                              </span>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  {activeTab === 'exams' && (
                    <div>
                      <div className="flex justify-between items-center mb-4">
                        <h3 className="text-lg font-medium text-gray-900">Exames</h3>
                      </div>
                      <ul className="divide-y divide-gray-200">
                        {patientRecord.exams.map((exam) => (
                          <li key={exam.id} className="py-3">
                            <div className="flex flex-col">
                              <span className="text-sm font-medium text-gray-900">{exam.exam_name}</span>
                              <span className="text-sm text-gray-500">
                                {new Date(exam.exam_date).toLocaleDateString('pt-BR')} - {exam.professional_name}
                              </span>
                              <span className="text-sm text-gray-500">Resultados: {exam.results}</span>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  {activeTab === 'notes' && (
                    <div>
                      <div className="flex justify-between items-center mb-4">
                        <h3 className="text-lg font-medium text-gray-900">Anotações Médicas</h3>
                        <button
                          type="button"
                          onClick={handleAddNote}
                          className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        >
                          Adicionar Anotação
                        </button>
                      </div>
                      <ul className="divide-y divide-gray-200">
                        {patientRecord.notes.map((note) => (
                          <li key={note.id} className="py-3">
                            <div className="flex flex-col">
                              <span className="text-sm font-medium text-gray-900">{note.note_text}</span>
                              <span className="text-sm text-gray-500">
                                {new Date(note.note_date).toLocaleDateString('pt-BR')} - {note.professional_name}
                              </span>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
