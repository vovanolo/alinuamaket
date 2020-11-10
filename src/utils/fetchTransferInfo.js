export function fetchTransferInfo(slug, language) {
  return fetch(
    `https://alin.ua/backend/api/blogpost/${slug}/${language}`
  ).then((response) => response.json());
}
