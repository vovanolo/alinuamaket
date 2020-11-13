import axios from 'axios';
// 'http://alin.ua/backend/api/send'
export function fetchCallBack(data) {
  return axios.post('https://alin.ua/backend/api/sendCallback', data);
}
