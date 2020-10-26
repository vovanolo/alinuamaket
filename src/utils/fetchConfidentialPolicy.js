export function fetchConfidentialPolicy(language) {
  return fetch(
    `http://alin.ua/backend/api/blog/politika-konfedencijnosti/${language}`
  ).then((response) => response.json());
}
