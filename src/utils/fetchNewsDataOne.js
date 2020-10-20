export function fetchNewsDataOne(slug) {
  return fetch(`https://alin.ua/backend/api/allnews/${slug}`).then((response) =>
    response.json()
  );
}
