import axios from 'axios';

export const HTTP = axios.create({
  baseURL:  'http://localhost:8088/controle-venda/',
  headers: {
    Authorization: 'Bearer {token}'
  }
})
