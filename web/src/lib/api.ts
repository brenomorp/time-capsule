import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://time-capsule-wheat.vercel.app/',
})
