import axios from "axios";

const api = axios.create({
  baseURL: "https://696739edbbe157c088b13980.mockapi.io/",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
