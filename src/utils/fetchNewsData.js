export function fetchNewsData() {
  return fetch('https://alin.ua/backend/api/allnews').then((response) =>
    response.json()
  );
}
