import { useEffect } from 'react';

type PageMeta = {
  title: string;
  description?: string;
  canonical?: string;
};

const setMeta = (name: string, content: string, attr: 'name' | 'property' = 'name') => {
  let tag = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${name}"]`);
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute(attr, name);
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', content);
};

const setCanonical = (href: string) => {
  let link = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!link) {
    link = document.createElement('link');
    link.rel = 'canonical';
    document.head.appendChild(link);
  }
  link.href = href;
};

export const usePageMeta = ({ title, description, canonical }: PageMeta) => {
  useEffect(() => {
    document.title = title;
    setMeta('og:title', title, 'property');

    if (description) {
      setMeta('description', description);
      setMeta('og:description', description, 'property');
      setMeta('twitter:description', description);
    }

    if (canonical) {
      setCanonical(canonical);
      setMeta('og:url', canonical, 'property');
    }
  }, [title, description, canonical]);
};
