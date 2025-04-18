/** @type {import('next').NextConfig} */
const nextConfig = {
  // Aktiviere die Optimierung von Bildern
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'tskzxlzudfnsvmfzrtpc.supabase.co',
      },
      {
        protocol: 'https',
        hostname: 'elumalab.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'placeholder.svg',
      },
    ],
    unoptimized: true,
  },
  
  // Umgebungsvariablen, die zur Build-Zeit verfügbar sein sollen
  env: {
    NEXT_PUBLIC_SITE_URL: 'https://elumalab.com',
    NEXT_PUBLIC_SITE_NAME: 'Elumalab',
  },
  
  // Aktiviere die Strict Mode für React
  reactStrictMode: true,

  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  
  // Füge diese Option hinzu, um Webpack-Fehler zu vermeiden
  webpack: (config) => {
    return config;
  },
}

export default nextConfig
