export function fetchNewsData() {
  return fetch("http://alin.ua/backend/api/allnews").then((response) =>
    response.json()
  );
}
