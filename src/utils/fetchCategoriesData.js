export function fetchCategoriesData(language) {
  return fetch(
    `https://alin.ua/backend/api/categories/${language}`
  ).then((response) => response.json());
}
