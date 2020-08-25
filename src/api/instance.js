import axios from "axios";

// базовые настройки для каждого запроса, посылаемого через данный instance
// к примеру: instance.get(...)
const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  withCredentials: true,
  headers: {
    "API-KEY": "53fb2270-6f02-4e6d-b5cc-105fec35240d",
  },
});

export default instance;
