import axios from 'axios';

const api = axios.create({
  baseURL: 'https://rollingdices-base.herokuapp.com'
});

export default api;