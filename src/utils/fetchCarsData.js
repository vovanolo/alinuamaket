export function fetchCarsData() {
  return fetch('http://alin.ua/backend/api/allcars').then((response) =>
    response.json()
  );
}
