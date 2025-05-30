'use client';

// Componente de barra de navegação
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Logo from './Logo';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userType, setUserType] = useState<string | null>(null);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    // Verificar se o usuário está logado
    const token = localStorage.getItem('token');
    const storedUserType = localStorage.getItem('userType');
    
    setIsLoggedIn(!!token);
    setUserType(storedUserType);
  }, [pathname]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    localStorage.removeItem('userType');
    setIsLoggedIn(false);
    setUserType(null);
    router.push('/login');
  };

  return (
    <nav className="bg-blue-600 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Logo />
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link href="/" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700">
                  Início
                </Link>
                
                {isLoggedIn && userType === 'patient' && (
                  <Link href="/patient/dashboard" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700">
                    Meu Dashboard
                  </Link>
                )}
                
                {isLoggedIn && userType === 'professional' && (
                  <Link href="/professional/dashboard" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700">
                    Dashboard Profissional
                  </Link>
                )}
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              {isLoggedIn ? (
                <button
                  onClick={handleLogout}
                  className="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700"
                >
                  Sair
                </button>
              ) : (
                <Link href="/login" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700">
                  Login
                </Link>
              )}
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-blue-700 focus:outline-none"
            >
              <span className="sr-only">Abrir menu principal</span>
              {/* Ícone de menu (hamburger) */}
              <svg
                className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              {/* Ícone de fechar (X) */}
              <svg
                className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Menu mobile */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link href="/" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700">
            Início
          </Link>
          
          {isLoggedIn && userType === 'patient' && (
            <Link href="/patient/dashboard" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700">
              Meu Dashboard
            </Link>
          )}
          
          {isLoggedIn && userType === 'professional' && (
            <Link href="/professional/dashboard" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700">
              Dashboard Profissional
            </Link>
          )}
          
          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="block w-full text-left px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700"
            >
              Sair
            </button>
          ) : (
            <Link href="/login" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700">
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
