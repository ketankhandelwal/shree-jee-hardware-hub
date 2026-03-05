import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  schema?: object;
}

export const useSEO = ({ title, description, canonical, schema }: SEOProps) => {
  useEffect(() => {
    // ── Title
    document.title = title;

    // ── Meta description
    let metaDesc = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.name = "description";
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = description;

    // ── OG title
    let ogTitle = document.querySelector<HTMLMetaElement>('meta[property="og:title"]');
    if (ogTitle) ogTitle.content = title;

    // ── OG description
    let ogDesc = document.querySelector<HTMLMetaElement>('meta[property="og:description"]');
    if (ogDesc) ogDesc.content = description;

    // ── OG url / canonical
    if (canonical) {
      let link = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
      if (link) link.href = canonical;

      let ogUrl = document.querySelector<HTMLMetaElement>('meta[property="og:url"]');
      if (ogUrl) ogUrl.content = canonical;
    }

    // ── Twitter title / description
    let twTitle = document.querySelector<HTMLMetaElement>('meta[name="twitter:title"]');
    if (twTitle) twTitle.content = title;
    let twDesc = document.querySelector<HTMLMetaElement>('meta[name="twitter:description"]');
    if (twDesc) twDesc.content = description;

    // ── Per-page JSON-LD schema
    let ldScript = document.getElementById("page-jsonld");
    if (schema) {
      if (!ldScript) {
        ldScript = document.createElement("script");
        ldScript.id = "page-jsonld";
        (ldScript as HTMLScriptElement).type = "application/ld+json";
        document.head.appendChild(ldScript);
      }
      ldScript.textContent = JSON.stringify(schema);
    } else if (ldScript) {
      ldScript.remove();
    }
  }, [title, description, canonical, schema]);
};
