'use client';

// Página de dashboard
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Dashboard() {
  // Dados simulados para o dashboard
  const [stats, setStats] = useState({
    totalPacientes: 0,
    consultasHoje: 0,
    examesPendentes: 0,
    consultasAgendadas: 0
  });

  // Simulação de carregamento de dados
  useEffect(() => {
    // Em produção, isso seria uma chamada real à API
    setTimeout(() => {
      setStats({
        totalPacientes: 256,
        consultasHoje: 12,
        examesPendentes: 8,
        consultasAgendadas: 24
      });
    }, 500);
  }, []);

  return (
    <div className="py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
        
        {/* Cards de estatísticas */}
        <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <div className="flex items-center">
                <div className="flex-shrink-0 bg-blue-500 rounded-md p-3">
                  <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">Total de Pacientes</dt>
                    <dd className="text-3xl font-semibold text-gray-900">{stats.totalPacientes}</dd>
                  </dl>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-4 sm:px-6">
              <div className="text-sm">
                <Link href="/pacientes" className="font-medium text-blue-600 hover:text-blue-500">
                  Ver todos os pacientes
                </Link>
              </div>
            </div>
          </div>

          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <div className="flex items-center">
                <div className="flex-shrink-0 bg-green-500 rounded-md p-3">
                  <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">Consultas Hoje</dt>
                    <dd className="text-3xl font-semibold text-gray-900">{stats.consultasHoje}</dd>
                  </dl>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-4 sm:px-6">
              <div className="text-sm">
                <Link href="/consultas" className="font-medium text-blue-600 hover:text-blue-500">
                  Ver agenda do dia
                </Link>
              </div>
            </div>
          </div>

          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <div className="flex items-center">
                <div className="flex-shrink-0 bg-yellow-500 rounded-md p-3">
                  <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">Exames Pendentes</dt>
                    <dd className="text-3xl font-semibold text-gray-900">{stats.examesPendentes}</dd>
                  </dl>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-4 sm:px-6">
              <div className="text-sm">
                <Link href="/exames" className="font-medium text-blue-600 hover:text-blue-500">
                  Ver exames pendentes
                </Link>
              </div>
            </div>
          </div>

          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <div className="flex items-center">
                <div className="flex-shrink-0 bg-purple-500 rounded-md p-3">
                  <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">Consultas Agendadas</dt>
                    <dd className="text-3xl font-semibold text-gray-900">{stats.consultasAgendadas}</dd>
                  </dl>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-4 sm:px-6">
              <div className="text-sm">
                <Link href="/consultas/agendadas" className="font-medium text-blue-600 hover:text-blue-500">
                  Ver todas as consultas
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Seção de ações rápidas */}
        <div className="mt-8">
          <h2 className="text-lg font-medium text-gray-900">Ações Rápidas</h2>
          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white overflow-hidden shadow rounded-lg divide-y divide-gray-200">
              <div className="px-4 py-5 sm:px-6">
                <h3 className="text-lg font-medium text-gray-900">Novo Paciente</h3>
                <p className="mt-1 text-sm text-gray-500">Cadastre um novo paciente no sistema</p>
              </div>
              <div className="px-4 py-4 sm:px-6">
                <Link href="/pacientes/novo" className="text-sm font-medium text-blue-600 hover:text-blue-500">
                  Cadastrar paciente &rarr;
                </Link>
              </div>
            </div>

            <div className="bg-white overflow-hidden shadow rounded-lg divide-y divide-gray-200">
              <div className="px-4 py-5 sm:px-6">
                <h3 className="text-lg font-medium text-gray-900">Nova Consulta</h3>
                <p className="mt-1 text-sm text-gray-500">Agende uma nova consulta médica</p>
              </div>
              <div className="px-4 py-4 sm:px-6">
                <Link href="/consultas/nova" className="text-sm font-medium text-blue-600 hover:text-blue-500">
                  Agendar consulta &rarr;
                </Link>
              </div>
            </div>

            <div className="bg-white overflow-hidden shadow rounded-lg divide-y divide-gray-200">
              <div className="px-4 py-5 sm:px-6">
                <h3 className="text-lg font-medium text-gray-900">Buscar Prontuário</h3>
                <p className="mt-1 text-sm text-gray-500">Pesquise prontuários de pacientes</p>
              </div>
              <div className="px-4 py-4 sm:px-6">
                <Link href="/prontuarios/buscar" className="text-sm font-medium text-blue-600 hover:text-blue-500">
                  Buscar prontuário &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
