export function fetchCategoriesData() {
  return fetch('http://alin.ua/backend/api/categories').then((response) =>
    response.json()
  );
}
