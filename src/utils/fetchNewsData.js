export function fetchNewsData(language) {
  return fetch(
    `https://alin.ua/backend/api/blog/news/${language}`
  ).then((response) => response.json());
}
