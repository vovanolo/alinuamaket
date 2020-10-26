export function fetchAdditionalOptionOne(slug, language) {
  return fetch(
    `https://alin.ua/backend/api/blogpost/${slug}/${language}`
  ).then((response) => response.json());
}
