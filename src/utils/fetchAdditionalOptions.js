export function fetchAdditionalOptions(language) {
  return fetch(
    `https://alin.ua/backend/api/blog/additional-services/${language}`
  ).then((response) => response.json());
}
