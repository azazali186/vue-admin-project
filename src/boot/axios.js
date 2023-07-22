/* eslint-disable no-undef */
import axios from "axios";

// Be careful when using SSR for cross-request state pollution
// due to creating a Singleton instance here;
// If any client changes this (global) instance, it might be a
// good idea to move this instance creation inside of the
// "export default () => {}" function below (which runs individually
// for each client)

const api = axios.create({
  headers: { "X-Requested-With": "XMLHttpRequest", Accept: "application/json" },
  baseURL: "https://api.azazali.in/api/admin",
  withCredentials: true,
});

api.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error

    if (error.response.status === 401) {
      window.location = "/#/auth/login";
    }
    return Promise.reject(error);
  }
);

export { axios, api };