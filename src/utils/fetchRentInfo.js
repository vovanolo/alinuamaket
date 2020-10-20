export function fetchRentInfo(data) {
  return fetch('https://alin.ua/backend/api/send', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-type': 'application/json',
    },
  }).then((response) => response.json());
}
