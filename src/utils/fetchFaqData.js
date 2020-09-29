export function fetchFaqData() {
  return fetch('http://alin.ua/backend/api/faq').then((response) =>
    response.json()
  );
}

