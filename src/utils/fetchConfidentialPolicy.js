export function fetchConfidentialPolicy(language) {
  return fetch(
    `https://alin.ua/backend/api/blog/politika-konfedencijnosti/${language}`
  ).then((response) => response.json());
}
