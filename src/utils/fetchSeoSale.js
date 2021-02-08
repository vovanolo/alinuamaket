export function fetchSeoSale(language) {
  return fetch(
    `https://alin.ua/backend/api/blog/seo-tekst-na-avtovikup/${language}`
  ).then((response) => response.json());
}
