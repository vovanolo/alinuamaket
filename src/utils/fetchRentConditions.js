export function fetchRentConditions(language) {
  return fetch(
    `https://alin.ua/backend/api/blog/umovi-orendi/${language}`
  ).then((response) => response.json());
}
