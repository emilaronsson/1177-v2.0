import axios from "axios";

export const caller = axios.create({
    baseURL: 'https://retoolapi.dev/na9kKT'
})

export const caller2 = axios.create({
    baseURL: 'http://localhost:3000'
})