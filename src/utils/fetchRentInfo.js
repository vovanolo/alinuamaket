import axios from 'axios';
// 'http://alin.ua/backend/api/send'
export function fetchRentInfo(data) {
  return axios.post('https://alin.ua/backend/api/send', data);
}
