import { useEffect } from 'react';
import { useLang, LANGS, buildPath } from '../i18n/LanguageContext';

const BASE_URL = 'https://lechenakoski.com.br';

type PageMeta = {
  title: string;
  description?: string;
  /** Path without language prefix, e.g. "" (home) or "termos-de-uso". */
  path: string;
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

const setAlternate = (hreflang: string, href: string) => {
  let link = document.head.querySelector<HTMLLinkElement>(`link[rel="alternate"][hreflang="${hreflang}"]`);
  if (!link) {
    link = document.createElement('link');
    link.rel = 'alternate';
    link.setAttribute('hreflang', hreflang);
    document.head.appendChild(link);
  }
  link.href = href;
};

export const usePageMeta = ({ title, description, path }: PageMeta) => {
  const { lang } = useLang();

  useEffect(() => {
    const current = LANGS.find((l) => l.code === lang) ?? LANGS[0];

    document.title = title;
    document.documentElement.lang = current.htmlLang;
    setMeta('og:title', title, 'property');
    setMeta('twitter:title', title);
    setMeta('og:locale', current.htmlLang.replace('-', '_'), 'property');

    if (description) {
      setMeta('description', description);
      setMeta('og:description', description, 'property');
      setMeta('twitter:description', description);
    }

    const canonical = BASE_URL + buildPath(lang, path);
    setCanonical(canonical);
    setMeta('og:url', canonical, 'property');

    // hreflang alternates for every language + x-default (PT).
    LANGS.forEach((l) => setAlternate(l.htmlLang, BASE_URL + buildPath(l.code, path)));
    setAlternate('x-default', BASE_URL + buildPath('pt', path));
  }, [title, description, path, lang]);
};
