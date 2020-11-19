export function fetchSeoLviv(language) {
  return fetch(
    `https://alin.ua/backend/api/blogpost/orenda-lviv/${language}`
  ).then((response) => response.json());
}
