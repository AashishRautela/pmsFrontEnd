import axios from 'axios';

export const HOST = process.env.NEXT_PUBLIC_DEV_APIS_URI;
const VERSION = '/api/v1';
const API = HOST + VERSION;

const instance = axios.create({
  baseURL: API
});

export default instance;
