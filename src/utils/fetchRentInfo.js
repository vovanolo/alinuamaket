export function fetchCarsData() {
  return fetch('http://alin.ua/backend/api/send').then((response) =>
    response.json()
  );
}
