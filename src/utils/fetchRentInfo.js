import axios from 'axios';
// 'http://alin.ua/backend/api/send'
export function fetchRentInfo(data) {
  return axios.post('http://alin.ua/backend/api/sendOrderCar', data);
}
