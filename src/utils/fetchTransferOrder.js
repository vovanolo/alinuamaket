import axios from 'axios';
// 'http://alin.ua/backend/api/send'
export function fetchTransferOrder(data) {
  return axios.post('https://alin.ua/backend/api/sendTransfer', data);
}
