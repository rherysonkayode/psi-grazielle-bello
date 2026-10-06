/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === "production";

// Cabeçalhos de segurança (aplicados só em produção para não atrapalhar o `npm run dev`)
const securityHeaders = [
  // Obriga HTTPS nos acessos seguintes (1 ano)
  { key: "Strict-Transport-Security", value: "max-age=31536000" },
  // Impede o navegador de "adivinhar" tipos de arquivo
  { key: "X-Content-Type-Options", value: "nosniff" },
  // Impede que o site seja embutido em iframes de terceiros (clickjacking)
  { key: "X-Frame-Options", value: "DENY" },
  // Não vaza a URL completa para outros sites
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  // Desliga recursos do navegador que o site não usa
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), payment=(), usb=(), interest-cohort=()",
  },
  // CSP conservadora: bloqueia iframes externos, plugins e <base>/forms desviados
  {
    key: "Content-Security-Policy",
    value:
      "frame-ancestors 'none'; object-src 'none'; base-uri 'self'; form-action 'self'; upgrade-insecure-requests",
  },
];

const nextConfig = {
  // Não anunciar a tecnologia do servidor
  poweredByHeader: false,
  async headers() {
    if (!isProd) return [];
    return [{ source: "/:path*", headers: securityHeaders }];
  },
};

export default nextConfig;
