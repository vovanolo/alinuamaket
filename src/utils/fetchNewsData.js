export function fetchNewsData(language) {
  return fetch(
    `http://alin.ua/backend/api/blog/news/${language}`
  ).then((response) => response.json());
}
