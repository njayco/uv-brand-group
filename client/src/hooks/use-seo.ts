import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
}

export function useSEO({ title, description }: SEOProps) {
  useEffect(() => {
    const fullTitle = `${title} | Unrevealed Brand`;
    document.title = fullTitle;

    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", description);
    }

    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute("content", fullTitle);
    }

    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) {
      ogDesc.setAttribute("content", description);
    }
  }, [title, description]);
}
