# prontuMed - Sistema Global de Prontuário Médico

O prontuMed é um sistema de prontuário médico eletrônico que permite o gerenciamento completo de registros médicos de pacientes, facilitando o acesso a informações clínicas de forma segura e eficiente.

## Visão Geral

O prontuMed é uma plataforma que conecta pacientes e profissionais de saúde, permitindo:

- **Para Pacientes**: Acesso ao seu histórico médico, exames, consultas e diagnósticos. Capacidade de gerar tokens temporários para compartilhar seu prontuário com profissionais de saúde.
- **Para Profissionais de Saúde**: Acesso ao prontuário completo do paciente mediante autorização (token), possibilidade de adicionar diagnósticos, prescrições e anotações médicas.

## Estrutura do Projeto

O projeto está organizado em duas partes principais:

- **frontend**: Aplicação Next.js com Tailwind CSS
- **backend**: API RESTful com Node.js/Express e PostgreSQL

## Backend Setup

### Requisitos

- Node.js (v14 ou superior)
- PostgreSQL (v12 ou superior)

### Instalação e Execução

```bash
# Navegar para o diretório backend
cd backend

# Instalar dependências
npm install

# Configurar variáveis de ambiente
# Edite o arquivo .env com suas configurações de banco de dados e JWT_SECRET

# Criar as tabelas no banco de dados
psql -U seu_usuario -d prontumed -f database/schema.sql

# Executar em modo desenvolvimento
npm run dev

# Executar em modo produção
npm start
```

O servidor backend estará disponível em `http://localhost:3001`.

### Variáveis de Ambiente (.env)

```
PORT=3001
DATABASE_URL=postgresql://usuario:senha@localhost:5432/prontumed
JWT_SECRET=sua_chave_secreta_para_jwt
NODE_ENV=development
```

## Frontend Setup

### Requisitos

- Node.js (v14 ou superior)

### Instalação e Execução

```bash
# Navegar para o diretório frontend
cd frontend

# Instalar dependências
npm install

# Executar em modo desenvolvimento
npm run dev
```

A aplicação frontend estará disponível em `http://localhost:3000`.

## API Endpoints

### Autenticação

- `POST /api/auth/register/patient` - Registrar novo paciente
- `POST /api/auth/register/professional` - Registrar novo profissional de saúde
- `POST /api/auth/login/patient` - Login de paciente
- `POST /api/auth/login/professional` - Login de profissional de saúde

### Pacientes

- `GET /api/patient/dashboard-data` - Obter dados do dashboard do paciente
- `GET /api/patient/medical-record` - Obter prontuário completo do paciente
- `POST /api/patient/generate-token` - Gerar token de acesso
- `GET /api/patient/active-token` - Obter token ativo
- `DELETE /api/patient/revoke-token` - Revogar token ativo
- `PUT /api/patient/profile` - Atualizar perfil do paciente
- `PUT /api/patient/change-password` - Alterar senha do paciente

### Profissionais de Saúde

- `POST /api/professional/access-patient-record` - Acessar prontuário do paciente usando token
- `GET /api/professional/patient/:patient_id/diagnoses` - Obter diagnósticos do paciente
- `POST /api/professional/patient/:patient_id/diagnoses` - Adicionar diagnóstico
- `GET /api/professional/patient/:patient_id/prescriptions` - Obter prescrições do paciente
- `POST /api/professional/patient/:patient_id/prescriptions` - Adicionar prescrição
- `GET /api/professional/patient/:patient_id/notes` - Obter anotações médicas do paciente
- `POST /api/professional/patient/:patient_id/notes` - Adicionar anotação médica

## Tecnologias Utilizadas

- **Frontend**:
  - Next.js
  - React
  - Tailwind CSS
  - TypeScript

- **Backend**:
  - Node.js
  - Express
  - PostgreSQL
  - JWT para autenticação
  - bcrypt para criptografia de senhas

## Funcionalidades Principais

1. **Sistema de Autenticação Duplo**:
   - Login específico para pacientes (via CPF)
   - Login específico para profissionais de saúde (via CPF, Email ou CRM)

2. **Sistema de Token de Acesso**:
   - Pacientes podem gerar tokens temporários (1 hora de validade)
   - Profissionais de saúde podem acessar prontuários usando esses tokens

3. **Dashboard do Paciente**:
   - Visualização de exames recentes
   - Visualização de consultas recentes
   - Visualização de diagnósticos
   - Impressão de diagnósticos e prontuário completo

4. **Dashboard do Profissional de Saúde**:
   - Interface para inserir token do paciente
   - Visualização completa do prontuário do paciente
   - Adição de diagnósticos, prescrições e anotações médicas

## Contribuição

Para contribuir com o projeto, por favor siga as diretrizes de contribuição descritas no arquivo CONTRIBUTING.md.
