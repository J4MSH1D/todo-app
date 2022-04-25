import axios from "axios";

const DB = import.meta.env.VITE_DB

const instance = axios.create({
    baseURL: DB
})

export default instance