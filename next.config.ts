const nextConfig = {
  eslint: {
    // Desabilita a verificação de ESLint durante o build
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Desabilita a verificação de TypeScript durante o build
    ignoreBuildErrors: true,
  },
}

module.exports = nextConfig
