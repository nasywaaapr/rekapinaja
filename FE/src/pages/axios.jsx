import axios from "axios";

const axiosInstance=axios.create({
    baseURL: 'https://localhost:5173', // Base URL yang digunakan untuk request API
    headers: {
        'Content-Type': "application/json" // Header yang dikirim ke server
    },
})

export default axiosInstance;