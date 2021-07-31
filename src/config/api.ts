import axios from 'axios';

const Api = axios.create({
  baseURL: `${
    process.env.REACT_APP_API_BASE ||
    'https://610557584b92a000171c5eaa.mockapi.io'
  }/`,
});

export default Api;
