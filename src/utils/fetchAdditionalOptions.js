export function fetchAdditionalOptions(language) {
  return fetch(
    `http://alin.ua/backend/api/blog/dodatkovi-opciyi/${language}`
  ).then((response) => response.json());
}
