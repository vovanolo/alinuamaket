export function fetchCarData(slug) {
  return fetch(`https://alin.ua/backend/api/allcars/${slug}`).then((response) =>
    response.json()
  );
}
