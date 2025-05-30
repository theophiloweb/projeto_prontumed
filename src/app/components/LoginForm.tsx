'use client';

// Componente de formulário de login
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { mockPatientLogin, mockProfessionalLogin } from '../utils/mockAuth';

type UserType = 'patient' | 'professional';

export default function LoginForm() {
  const [userType, setUserType] = useState<UserType>('patient');
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      // Usar dados falsos para simular login
      if (userType === 'patient') {
        // Credenciais de teste: cpf: 12345678901, senha: senha123
        const result = mockPatientLogin(identifier, password);
        
        localStorage.setItem('token', result.token);
        localStorage.setItem('user', JSON.stringify(result.patient));
        localStorage.setItem('userType', 'patient');
        
        router.push('/patient/dashboard');
      } else {
        // Credenciais de teste: identifier: CRM12345, senha: senha123
        const result = mockProfessionalLogin(identifier, password);
        
        localStorage.setItem('token', result.token);
        localStorage.setItem('user', JSON.stringify(result.professional));
        localStorage.setItem('userType', 'professional');
        
        router.push('/professional/dashboard');
      }
    } catch (err: any) {
      setIsLoading(false);
      setError(err.message || 'Ocorreu um erro ao fazer login');
    }
  };

  const handleUpload = () => {
    // Simulação de verificação de usuário para upload
    if (!identifier) {
      setError('Por favor, insira seu CPF para fazer upload de arquivos');
      return;
    }
    
    // Simulação de upload de arquivo
    alert(`Funcionalidade de upload para o usuário ${identifier} será implementada. O arquivo será enviado para o dashboard do paciente.`);
  };

  return (
    <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
      <div className="mb-6">
        <div className="flex justify-center space-x-4">
          <button
            type="button"
            onClick={() => setUserType('patient')}
            className={`px-4 py-2 rounded-md ${
              userType === 'patient'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Paciente
          </button>
          <button
            type="button"
            onClick={() => setUserType('professional')}
            className={`px-4 py-2 rounded-md ${
              userType === 'professional'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Profissional de Saúde
          </button>
        </div>
      </div>

      <form className="space-y-6" onSubmit={handleSubmit}>
        {error && (
          <div className="bg-red-50 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
            <span className="block sm:inline">{error}</span>
          </div>
        )}
        
        <div>
          <label htmlFor="identifier" className="block text-sm font-medium text-gray-700">
            {userType === 'patient' ? 'CPF' : 'Identificador (CPF, Email ou CRM)'}
          </label>
          <div className="mt-1">
            <input
              id="identifier"
              name="identifier"
              type="text"
              autoComplete={userType === 'patient' ? 'cpf' : 'username'}
              required
              value={identifier}
              onChange={(e) => setIdentifier(e.target.value)}
              className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
              placeholder={userType === 'patient' ? 'Digite seu CPF' : 'Digite seu CPF, Email ou CRM'}
            />
          </div>
          {userType === 'patient' && (
            <p className="mt-1 text-xs text-gray-500">
              Para teste, use: 12345678901
            </p>
          )}
          {userType === 'professional' && (
            <p className="mt-1 text-xs text-gray-500">
              Para teste, use: CRM12345
            </p>
          )}
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Senha
          </label>
          <div className="mt-1">
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
              placeholder="Digite sua senha"
            />
          </div>
          <p className="mt-1 text-xs text-gray-500">
            Para teste, use: senha123
          </p>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input
              id="remember-me"
              name="remember-me"
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
            />
            <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
              Lembrar-me
            </label>
          </div>

          <div className="text-sm">
            <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
              Esqueceu sua senha?
            </a>
          </div>
        </div>

        <div className="flex flex-col space-y-4">
          <button
            type="submit"
            disabled={isLoading}
            className="flex w-full justify-center rounded-md border border-transparent bg-blue-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-75"
          >
            {isLoading ? 'Entrando...' : 'Entrar'}
          </button>
          
          {userType === 'patient' && (
            <button
              type="button"
              onClick={handleUpload}
              className="flex w-full justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Upload
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
