import { SITE_URL } from "@/lib/site";

// Gerado uma vez no build (exportação estática)
export const dynamic = "force-static";

export default function sitemap() {
  return [
    { url: SITE_URL, lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    { url: `${SITE_URL}/privacidade`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.2 },
  ];
}
