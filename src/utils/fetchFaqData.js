export function fetchFaqData(language) {
  return fetch(`https://alin.ua/backend/api/faq/${language}`).then((response) =>
    response.json()
  );
}
