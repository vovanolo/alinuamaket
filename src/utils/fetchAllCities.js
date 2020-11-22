export function fetchAllCities(language) {
  return fetch(
    `https://alin.ua/backend/api/cities/${language}`
  ).then((response) => response.json());
}
