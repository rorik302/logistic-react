import axios from 'axios'

const BASE_URL = "http://localhost:8000/api/"

export const getDataFromUrl = async (url) => await axios(`${ BASE_URL }${ url }`)
export const saveDataToUrl = async (url, data) => {
    const method = data.id ? "PUT" : "POST"
    const newUrl = data.id ? `${ BASE_URL }${ url }${ data.id }/` : `${ BASE_URL }${ url }`
    console.log(data)
    return (await axios({
        method: method,
        url: newUrl,
        data: data
    }))
}
export const deleteData = async (url) => {
    return await axios.delete(`${BASE_URL}${url}`)
}