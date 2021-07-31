import axios from 'axios';

const Api = axios.create({
  baseURL: `${process.env.REACT_APP_API_BASE || 'http://localhost:5000'}/`,
});

export default Api;
