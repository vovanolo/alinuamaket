export function fetchRentConditions(language) {
  return fetch(
    `http://alin.ua/backend/api/blog/umovi-orendi/${language}`
  ).then((response) => response.json());
}
