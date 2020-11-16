import axios from 'axios'

const BASE_URL = "http://localhost:8000/api/"

export const getResourse = async (url) => {
    const res = await axios(`${BASE_URL}${url}`)
    return res.data
}