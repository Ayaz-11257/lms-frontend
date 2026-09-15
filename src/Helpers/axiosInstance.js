import axios from "axios";

// const BASE_URL = "http://localhost:5001/api/v1";
const BASE_URL = "https://lms-backend-y596.onrender.com/api/v1";


const axiosInstance = axios.create({
    baseURL: BASE_URL,
    withCredentials: true,
});

axiosInstance.defaults.baseURL = BASE_URL;
axiosInstance.defaults.withCredentials = true;

export default axiosInstance;