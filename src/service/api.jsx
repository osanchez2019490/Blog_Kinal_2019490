import axios from "axios";

const apiClient = axios.create({
    baseURL: 'http://127.0.0.1:3001/opinionManager/v1',
    timeout: 5000
})

