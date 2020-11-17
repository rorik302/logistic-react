import axios from 'axios'

const BASE_URL = "http://localhost:8000/api/"

export const getDataFromUrl = async (url) => await axios(`${BASE_URL}${url}`)