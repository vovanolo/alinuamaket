export function fetchCarSale(language) {
  return fetch(
    `https://alin.ua/backend/api/car-ransoms/${language}`
  ).then((response) => response.json());
}
