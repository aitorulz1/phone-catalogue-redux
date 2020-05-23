import axios from 'axios';

const http = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}/phones`
});

const list = () => http.get('/phones');

export default {
  list
}