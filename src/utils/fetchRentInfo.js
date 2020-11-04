import axios from 'axios';

export function fetchRentInfo(data) {
  return axios.post('http://alin.ua/backend/api/send', data);
}
