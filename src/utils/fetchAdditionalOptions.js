export function fetchAdditionalOptions(language) {
  return fetch(
    `https://alin.ua/backend/api/blog/dodatkovi-opciyi/${language}`
  ).then((response) => response.json());
}
