export interface SeoMeta {
  title: string;
  description: string;
  ogTitle: string;
  ogDescription: string;
  skipLink: string;
  ogType?: 'website' | 'article';
  publishedTime?: string;
}

export function createSiteSchema(origin: string, url: string, locale: 'en' | 'id', meta: SeoMeta) {
  const personId = `${origin}/#radhi`;
  const websiteId = `${origin}/#website`;
  const pageId = `${url}#webpage`;
  const pathname = new URL(url).pathname;
  const prefix = locale === 'en' ? '' : '/id';
  const homeUrl = `${origin}${prefix}/`;
  const isHome = pathname === `${prefix}/`;
  const isBlog = pathname === `${prefix}/blog/`;
  const isArticle = meta.ogType === 'article';
  const pageName = meta.title.replace(/ \| Radhi Arrazzaaq$/, '');
  const graph: Record<string, unknown>[] = [
    {
      '@type': 'Person', '@id': personId, name: 'Radhi Arrazzaaq', url: `${origin}/`,
      sameAs: ['https://www.instagram.com/radhiarrazzaaq/', 'https://www.youtube.com/@radhiarrazzaaq'],
      knowsAbout: ['Google Ads', 'Meta Ads', 'Lead qualification', 'CS follow-up', 'Trial booking'],
    },
    {
      '@type': 'WebSite', '@id': websiteId, url: `${origin}/`, name: 'Radhi Arrazzaaq',
      inLanguage: ['en', 'id'], publisher: { '@id': personId },
    },
    {
      '@type': isBlog ? 'CollectionPage' : 'WebPage', '@id': pageId,
      url, name: meta.title, description: meta.description, inLanguage: locale,
      isPartOf: { '@id': websiteId }, author: { '@id': personId },
      ...(isHome ? { about: { '@id': personId } } : { breadcrumb: { '@id': `${url}#breadcrumbs` } }),
      ...(isArticle ? { mainEntity: { '@id': `${url}#article` } } : {}),
    },
  ];
  if (!isHome) {
    const crumbs = [{ name: locale === 'en' ? 'Home' : 'Beranda', item: homeUrl }];
    if (isArticle) crumbs.push({ name: 'Blog', item: `${origin}${prefix}/blog/` });
    crumbs.push({ name: isBlog ? 'Blog' : pageName, item: url });
    graph.push({ '@type': 'BreadcrumbList', '@id': `${url}#breadcrumbs`, itemListElement:
      crumbs.map((crumb, index) => ({ '@type': 'ListItem', position: index + 1, ...crumb })),
    });
  }
  if (isArticle) {
    graph.push({
      '@type': 'BlogPosting', '@id': `${url}#article`, url,
      headline: meta.ogTitle, description: meta.description, inLanguage: locale,
      datePublished: meta.publishedTime, author: { '@id': personId },
      publisher: { '@id': personId }, mainEntityOfPage: { '@id': pageId },
    });
  }
  // Escape markup delimiters so editorial text cannot end the JSON-LD script.
  return JSON.stringify({ '@context': 'https://schema.org', '@graph': graph }).replace(/</g, '\\u003c');
}
