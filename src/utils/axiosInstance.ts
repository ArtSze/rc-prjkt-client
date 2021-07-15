import axios, { AxiosRequestConfig } from 'axios';

const baseURL = 'http://localhost:4000/';

const config: AxiosRequestConfig = { baseURL };
export const axiosInstance = axios.create(config);
