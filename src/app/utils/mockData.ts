// Arquivo com dados falsos para simular a API e popular os dashboards

// Tipos de dados
export interface Patient {
  id: number;
  cpf: string;
  full_name: string;
  email: string;
}

export interface HealthProfessional {
  id: number;
  identifier: string;
  identifier_type: 'CPF' | 'EMAIL' | 'CRM';
  full_name: string;
  specialty?: string;
  crm_number?: string;
  email?: string;
}

export interface Exam {
  id: number;
  exam_name: string;
  exam_date: string;
  professional_name: string;
  results?: string;
  file_url?: string;
}

export interface Consultation {
  id: number;
  consultation_date: string;
  professional_name: string;
  specialty: string;
  notes?: string;
}

export interface Diagnosis {
  id: number;
  diagnosis_text: string;
  diagnosis_date: string;
  professional_name: string;
}

export interface Prescription {
  id: number;
  medication_name: string;
  dosage: string;
  frequency: string;
  duration: string;
  prescription_date: string;
  professional_name: string;
}

export interface MedicalNote {
  id: number;
  note_text: string;
  note_date: string;
  professional_name: string;
}

// Dados falsos de pacientes
export const mockPatients: Patient[] = [
  {
    id: 1,
    cpf: '123.456.789-01',
    full_name: 'João da Silva',
    email: 'joao.silva@email.com'
  },
  {
    id: 2,
    cpf: '987.654.321-00',
    full_name: 'Maria Oliveira',
    email: 'maria.oliveira@email.com'
  },
  {
    id: 3,
    cpf: '111.222.333-44',
    full_name: 'Pedro Santos',
    email: 'pedro.santos@email.com'
  }
];

// Dados falsos de profissionais de saúde
export const mockProfessionals: HealthProfessional[] = [
  {
    id: 1,
    identifier: 'CRM12345',
    identifier_type: 'CRM',
    full_name: 'Dra. Ana Beatriz Cardoso',
    specialty: 'Cardiologia',
    crm_number: 'CRM12345',
    email: 'ana.cardoso@email.com'
  },
  {
    id: 2,
    identifier: 'CRM54321',
    identifier_type: 'CRM',
    full_name: 'Dr. Carlos Eduardo Mendes',
    specialty: 'Clínica Geral',
    crm_number: 'CRM54321',
    email: 'carlos.mendes@email.com'
  },
  {
    id: 3,
    identifier: 'CRM98765',
    identifier_type: 'CRM',
    full_name: 'Dra. Juliana Alves',
    specialty: 'Dermatologia',
    crm_number: 'CRM98765',
    email: 'juliana.alves@email.com'
  }
];

// Dados falsos de exames
export const mockExams: Exam[] = [
  {
    id: 1,
    exam_name: 'Hemograma Completo',
    exam_date: '2025-05-15',
    professional_name: 'Dr. Carlos Eduardo Mendes',
    results: 'Hemácias: 5.1 milhões/mm³ (Normal: 4.5-6.0)\nHemoglobina: 15.2 g/dL (Normal: 13.5-18.0)\nLeucócitos: 7.500/mm³ (Normal: 4.000-10.000)\nPlaquetas: 250.000/mm³ (Normal: 150.000-450.000)'
  },
  {
    id: 2,
    exam_name: 'Raio-X Tórax',
    exam_date: '2025-05-10',
    professional_name: 'Dra. Ana Beatriz Cardoso',
    results: 'Campos pulmonares sem alterações. Silhueta cardíaca normal. Seios costofrênicos livres. Conclusão: Exame dentro dos padrões de normalidade.'
  },
  {
    id: 3,
    exam_name: 'Eletrocardiograma',
    exam_date: '2025-04-28',
    professional_name: 'Dra. Ana Beatriz Cardoso',
    results: 'Ritmo sinusal normal. Frequência cardíaca de 72 bpm. Intervalos PR, QRS e QT dentro da normalidade. Sem alterações isquêmicas agudas.'
  },
  {
    id: 4,
    exam_name: 'Glicemia em Jejum',
    exam_date: '2025-04-15',
    professional_name: 'Dr. Carlos Eduardo Mendes',
    results: 'Resultado: 92 mg/dL (Valor de referência: 70-99 mg/dL)\nInterpretação: Normal'
  },
  {
    id: 5,
    exam_name: 'Ultrassonografia Abdominal',
    exam_date: '2025-03-20',
    professional_name: 'Dr. Roberto Ferreira',
    results: 'Fígado de dimensões normais, contornos regulares e ecotextura homogênea. Vesícula biliar, pâncreas, baço e rins sem alterações. Conclusão: Exame dentro dos padrões de normalidade.'
  }
];

// Dados falsos de consultas
export const mockConsultations: Consultation[] = [
  {
    id: 1,
    consultation_date: '2025-05-20',
    professional_name: 'Dra. Ana Beatriz Cardoso',
    specialty: 'Cardiologia',
    notes: 'Paciente relata dores no peito ocasionais. Pressão arterial 130/85 mmHg. Solicitado eletrocardiograma e exames laboratoriais.'
  },
  {
    id: 2,
    consultation_date: '2025-05-05',
    professional_name: 'Dr. Carlos Eduardo Mendes',
    specialty: 'Clínica Geral',
    notes: 'Consulta de rotina. Paciente sem queixas. Exames laboratoriais dentro da normalidade.'
  },
  {
    id: 3,
    consultation_date: '2025-04-15',
    professional_name: 'Dra. Juliana Alves',
    specialty: 'Dermatologia',
    notes: 'Paciente apresenta erupção cutânea no braço direito. Prescrito creme antialérgico e recomendado evitar exposição a produtos químicos irritantes.'
  },
  {
    id: 4,
    consultation_date: '2025-03-10',
    professional_name: 'Dr. Carlos Eduardo Mendes',
    specialty: 'Clínica Geral',
    notes: 'Paciente com sintomas de rinite alérgica. Prescrito anti-histamínico e spray nasal.'
  },
  {
    id: 5,
    consultation_date: '2025-02-22',
    professional_name: 'Dra. Mariana Costa',
    specialty: 'Oftalmologia',
    notes: 'Exame oftalmológico de rotina. Acuidade visual normal. Recomendado uso de óculos para leitura.'
  }
];

// Dados falsos de diagnósticos
export const mockDiagnoses: Diagnosis[] = [
  {
    id: 1,
    diagnosis_text: 'Hipertensão Arterial Leve',
    diagnosis_date: '2025-05-20',
    professional_name: 'Dra. Ana Beatriz Cardoso'
  },
  {
    id: 2,
    diagnosis_text: 'Dermatite de Contato',
    diagnosis_date: '2025-04-15',
    professional_name: 'Dra. Juliana Alves'
  },
  {
    id: 3,
    diagnosis_text: 'Rinite Alérgica',
    diagnosis_date: '2025-03-10',
    professional_name: 'Dr. Carlos Eduardo Mendes'
  },
  {
    id: 4,
    diagnosis_text: 'Presbiopia Leve',
    diagnosis_date: '2025-02-22',
    professional_name: 'Dra. Mariana Costa'
  }
];

// Dados falsos de prescrições
export const mockPrescriptions: Prescription[] = [
  {
    id: 1,
    medication_name: 'Losartana',
    dosage: '50mg',
    frequency: '1x ao dia',
    duration: '30 dias',
    prescription_date: '2025-05-20',
    professional_name: 'Dra. Ana Beatriz Cardoso'
  },
  {
    id: 2,
    medication_name: 'Hidrocortisona Creme',
    dosage: '1%',
    frequency: '2x ao dia',
    duration: '7 dias',
    prescription_date: '2025-04-15',
    professional_name: 'Dra. Juliana Alves'
  },
  {
    id: 3,
    medication_name: 'Loratadina',
    dosage: '10mg',
    frequency: '1x ao dia',
    duration: '15 dias',
    prescription_date: '2025-03-10',
    professional_name: 'Dr. Carlos Eduardo Mendes'
  },
  {
    id: 4,
    medication_name: 'Fluticasona Spray Nasal',
    dosage: '50mcg',
    frequency: '2 aplicações em cada narina 1x ao dia',
    duration: '30 dias',
    prescription_date: '2025-03-10',
    professional_name: 'Dr. Carlos Eduardo Mendes'
  }
];

// Dados falsos de anotações médicas
export const mockMedicalNotes: MedicalNote[] = [
  {
    id: 1,
    note_text: 'Paciente relata melhora dos sintomas após início do tratamento com Losartana. Pressão arterial controlada.',
    note_date: '2025-05-25',
    professional_name: 'Dra. Ana Beatriz Cardoso'
  },
  {
    id: 2,
    note_text: 'Recomendado evitar alimentos com alto teor de sódio e praticar atividade física regularmente.',
    note_date: '2025-05-20',
    professional_name: 'Dra. Ana Beatriz Cardoso'
  },
  {
    id: 3,
    note_text: 'Dermatite apresentou melhora significativa após uso do creme prescrito. Pele sem lesões aparentes.',
    note_date: '2025-04-22',
    professional_name: 'Dra. Juliana Alves'
  },
  {
    id: 4,
    note_text: 'Sintomas de rinite alérgica controlados com medicação. Paciente relata melhora na qualidade do sono.',
    note_date: '2025-03-25',
    professional_name: 'Dr. Carlos Eduardo Mendes'
  }
];

// Dados falsos de usuários para login
export const mockUsers = {
  patients: [
    {
      cpf: '12345678901',
      password: 'senha123',
      id: 1,
      full_name: 'João da Silva',
      email: 'joao.silva@email.com'
    },
    {
      cpf: '98765432100',
      password: 'senha123',
      id: 2,
      full_name: 'Maria Oliveira',
      email: 'maria.oliveira@email.com'
    }
  ],
  professionals: [
    {
      identifier: 'CRM12345',
      password: 'senha123',
      id: 1,
      full_name: 'Dra. Ana Beatriz Cardoso',
      specialty: 'Cardiologia',
      identifier_type: 'CRM'
    },
    {
      identifier: 'CRM54321',
      password: 'senha123',
      id: 2,
      full_name: 'Dr. Carlos Eduardo Mendes',
      specialty: 'Clínica Geral',
      identifier_type: 'CRM'
    }
  ]
};

// Função para gerar um token aleatório
export const generateMockToken = () => {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
};

// Dados do dashboard do paciente
export const getMockPatientDashboardData = (patientId: number) => {
  return {
    exams: mockExams.slice(0, 3),
    consultations: mockConsultations.slice(0, 3),
    diagnoses: mockDiagnoses.slice(0, 3)
  };
};

// Dados do prontuário completo do paciente
export const getMockPatientMedicalRecord = (patientId: number) => {
  const patient = mockPatients.find(p => p.id === patientId) || mockPatients[0];
  
  return {
    patient,
    exams: mockExams,
    consultations: mockConsultations,
    diagnoses: mockDiagnoses,
    prescriptions: mockPrescriptions,
    notes: mockMedicalNotes
  };
};
