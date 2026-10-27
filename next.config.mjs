/** @type {import('next').NextConfig} */

// Site 100% estático: `npm run build` gera a pasta `out/`, que pode ser publicada na
// Cloudflare (wrangler.jsonc) ou na Vercel. Os cabeçalhos de segurança ficam em
// `public/_headers` (Cloudflare) e em `vercel.json` (Vercel), já que `headers()` do Next
// não se aplica à exportação estática.
const nextConfig = {
  output: "export",
  // A otimização de imagens do Next precisa de servidor; as imagens já vão leves.
  images: { unoptimized: true },
  poweredByHeader: false,
};

export default nextConfig;
