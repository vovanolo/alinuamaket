export function fetchSeo(pageKey, language) {
  return fetch(
    `https://alin.ua/backend/api/seo/${pageKey}/${language}`
  ).then((response) => response.json());
}
