export function fetchTransferPosts(language) {
  return fetch(
    `https://alin.ua/backend/api/blog/transferi/${language}`
  ).then((response) => response.json());
}
