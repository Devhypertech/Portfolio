import { siteConfig } from "@/lib/site-config";

/** JSON-LD for Person + WebSite — improves rich results eligibility. */
export function JsonLd() {
  const sameAs = [siteConfig.social.linkedin, siteConfig.social.fiverr].filter(
    Boolean,
  );

  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        url: siteConfig.url,
        name: siteConfig.name,
        description: siteConfig.description,
        inLanguage: "en",
      },
      {
        "@type": "Person",
        "@id": `${siteConfig.url}/#person`,
        name: siteConfig.name,
        url: siteConfig.url,
        jobTitle: siteConfig.title,
        sameAs,
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
