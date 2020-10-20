export function fetchRentInfo(data) {
  return fetch('https://alin.ua/backend/api/send', {
    method: 'POST',
    body: data,
  }).then((response) => response.json());
}
