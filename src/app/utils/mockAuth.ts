// Utilitário para simular autenticação com dados falsos
import { mockUsers, generateMockToken } from './mockData';

// Simular login de paciente
export const mockPatientLogin = (cpf: string, password: string) => {
  const patient = mockUsers.patients.find(p => p.cpf === cpf && p.password === password);
  
  if (!patient) {
    throw new Error('Credenciais inválidas');
  }
  
  // Simular token JWT
  const token = 'fake-jwt-token-' + generateMockToken();
  
  return {
    patient: {
      id: patient.id,
      cpf: patient.cpf,
      full_name: patient.full_name,
      email: patient.email
    },
    token
  };
};

// Simular login de profissional de saúde
export const mockProfessionalLogin = (identifier: string, password: string) => {
  const professional = mockUsers.professionals.find(p => p.identifier === identifier && p.password === password);
  
  if (!professional) {
    throw new Error('Credenciais inválidas');
  }
  
  // Simular token JWT
  const token = 'fake-jwt-token-' + generateMockToken();
  
  return {
    professional: {
      id: professional.id,
      identifier: professional.identifier,
      identifier_type: professional.identifier_type,
      full_name: professional.full_name,
      specialty: professional.specialty
    },
    token
  };
};

// Simular geração de token de acesso para paciente
export const mockGenerateAccessToken = (patientId: number) => {
  const token = generateMockToken();
  
  // Simular data de expiração (1 hora a partir de agora)
  const expiresAt = new Date();
  expiresAt.setHours(expiresAt.getHours() + 1);
  
  return {
    token,
    expires_at: expiresAt.toISOString()
  };
};

// Simular validação de token de acesso
export const mockValidateAccessToken = (token: string) => {
  // Simular validação bem-sucedida (em um cenário real, verificaríamos se o token existe e não expirou)
  // Para fins de demonstração, vamos considerar que qualquer token com pelo menos 10 caracteres é válido
  if (token && token.length >= 10) {
    return {
      valid: true,
      patient_id: 1 // Sempre retorna o paciente com ID 1 para demonstração
    };
  }
  
  return {
    valid: false,
    error: 'Token inválido ou expirado'
  };
};
