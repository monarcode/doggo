import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://dog.ceo/api",
});

export default axiosInstance;
