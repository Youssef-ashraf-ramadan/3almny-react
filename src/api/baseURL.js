import axios from 'axios'

const baseUrl = axios.create({
    baseURL: "https://trust-eg.academy/api", 
    headers: {
      "Content-Type": "application/json",
    },
  });
export default baseUrl 