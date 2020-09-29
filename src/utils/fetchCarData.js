export function fetchCarData() {
    return fetch('http://alin.ua/backend/api/allcars').then((response) =>
      response.json()
    );
  }