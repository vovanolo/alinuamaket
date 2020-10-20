export function fetchCarsData() {
  return fetch('https://alin.ua/backend/api/allcars').then((response) =>
    response.json()
  );
}
