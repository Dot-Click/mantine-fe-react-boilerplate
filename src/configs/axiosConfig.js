import axios from "axios";
// import { errorMessage } from "../globalFunctions";

export const baseURL = "http://127.0.0.1:8000/api";

// axios instance for json data
const custAxios = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

// attaching Bearer token to axios so that it can be used in all the requests and the server can verify the user
export const attachToken = () => {
  const token = localStorage.getItem("token");

  if (token) {
    custAxios.defaults.headers.common["Authorization"] = token;
  }
};

// attaching Bearer token to form axios so that it can be used in all the requests and the server can verify the user
export const attachTokenWithFormAxios = () => {
  const token = localStorage.getItem("token");

  if (token) {
    formAxios.defaults.headers.common["Authorization"] = token;
  }
};

// axios instance for formdata
export const formAxios = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "multipart/form-data",
    Accept: "application/json",
  },
});

export default custAxios;
