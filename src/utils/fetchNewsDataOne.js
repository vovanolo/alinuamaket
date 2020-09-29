export function fetchNewsDataOne(slug) {
  return fetch(`http://alin.ua/backend/api/allnews/${slug}`).then((response) =>
    response.json()
  );
}
