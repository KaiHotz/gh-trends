import Axios from 'axios';

export const httpClient = Axios.create({
  baseURL: 'https://cors-anywhere.herokuapp.com/https://gh-trending-api.herokuapp.com',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});
