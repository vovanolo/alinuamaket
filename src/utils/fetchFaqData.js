export function fetchFaqData() {
  return fetch('https://alin.ua/backend/api/faq').then((response) =>
    response.json()
  );
}
