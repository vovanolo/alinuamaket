export function fetchCarData(slug) {
  return fetch(`http://alin.ua/backend/api/allcars/${slug}`).then((response) =>
    response.json()
  );
}
