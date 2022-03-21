import axios from "axios";

export const key = "fba77c775afd40d84b2191891837422bad6e74d7";

const api = axios.create({
  baseURL: "https://api-ssl.bitly.com/v4/",
  headers: {
    Authorization: `Bearer ${key}`,
  },
});

export default api;
