import axios from "axios";

export const customAxios = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  timeout: 10000,
});

customAxios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === 401) {
      console.log(error.response);
    } else {
      alert(error.response.data.message);
    }
    return Promise.reject(error);
  }
);

customAxios.interceptors.request.use(
  (request) => {
    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);
