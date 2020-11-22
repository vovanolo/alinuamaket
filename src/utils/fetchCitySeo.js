export function fetchCitySeo(city, language) {
  return fetch(
    `https://alin.ua/backend/api/citi/${city}/${language}`
  ).then((response) => response.json());
}
