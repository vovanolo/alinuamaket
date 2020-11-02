export function fetchSeoText(language) {
  return fetch(
    `https://alin.ua/backend/api/blog/seo-tekst-na-golovnij/${language}`
  ).then((response) => response.json());
}
