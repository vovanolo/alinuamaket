export function fetchCategoriesData() {
  return fetch('https://alin.ua/backend/api/categories').then((response) =>
    response.json()
  );
}
