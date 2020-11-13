import axios from 'axios';
// 'http://alin.ua/backend/api/send'
export function fetchContactsInfo(data) {
  return axios.post('https://alin.ua/backend/api/sendContact', data);
}
