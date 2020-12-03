import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import { fetchSeo } from '../utils/fetchSeo';

import { useTranslate } from '../hooks/useTranslate';

export default function PageContainer({ component: Component }) {
  const [seo, setSeo] = useState(null);

  const { pathname } = useLocation();

  const { i18n } = useTranslate();

  useEffect(() => {
    let pageKey = pathname.split('/').slice(2).join('-');

    pageKey = pageKey.length > 0 ? pageKey : 'home';

    fetchSeo(pageKey, i18n.language).then((res) => setSeo(res));
  }, [pathname, i18n.language]);

  const languages = Object.keys(i18n.options.resources);

  return (
    <>
      {seo && (
        <Helmet>
          {languages.length > 0 &&
            languages.map((lang) => {
              if (lang !== (localStorage.getItem('lang') || 'ua')) {
                return (
                  <link
                    key={lang}
                    rel="alternate"
                    hrefLang={lang}
                    href={`https://alin.ua${pathname.replace(
                      i18n.language,
                      lang
                    )}`}
                  />
                );
              }
            })}
          <title>Alin - {seo.page_title}</title>
          <meta name="title" content={seo.meta_title} />
          <meta name="description" content={seo.meta_description} />
          <meta name="keyword" content={seo.meta_keywords} />
          {/* <meta name="canonical" content={seo.canonical} /> */}
          <link rel="canonical" href={seo.canonical} />
        </Helmet>
      )}

      <Component seo={seo} />
    </>
  );
}
