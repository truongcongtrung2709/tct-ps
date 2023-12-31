import axios from "axios";

const fetcher = axios.create({
  baseURL: "http://localhost:3000",
  headers:{
    Authorization: `Bearer ${localStorage.getItem("accessToken") || ""}`
  }
})

fetcher.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error)=>{
    return Promise.reject(error.response.data);
  }
);
export default fetcher;