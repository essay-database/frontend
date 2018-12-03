import axios from "axios";

axios.interceptors.response.use(
  config => config,
  error => {
    if (error.response.status === 408 || error.code === "ECONNABORTED") {
      console.error(`A timeout happend on url ${error.config.url}`);
    }
    return Promise.reject(error);
  }
);

axios.interceptors.request.use(
  config => {
    console.log("Starting Request", config);
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  response => {
    console.log("Response:", response);
    return response;
  },
  error => {
    return Promise.reject(error);
  }
);
