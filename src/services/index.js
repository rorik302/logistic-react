import axios from 'axios'

export const BASE_URL = "http://localhost:8000/api/"

axios.interceptors.request.use(
    config => {
        const accessToken = localStorage.getItem("access")
        if (accessToken) {
            config.headers.authorization = `Bearer ${accessToken}`
        }
        return config
    },
    error => Promise.reject(error)
)

axios.interceptors.response.use(
    response => response,
    error => {
        const originalRequest = error.config
        if (error.response.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true
            const refreshToken = localStorage.getItem("refresh")
            return axios.post(
                `${BASE_URL}token/refresh/`, { refresh: refreshToken }
                ).then(
                    res => {
                        localStorage.setItem("access", res.data.access)
                        localStorage.setItem("refresh", res.data.refresh)
                        axios.defaults.headers.authorization = `Bearer ${localStorage.getItem("access")}`
                        return axios(originalRequest)
                    }
            )

        }
        return Promise.reject(error)
    }
)

export const getDataFromUrl = async (url) => await axios(`${ BASE_URL }${ url }`)
export const saveDataToUrl = async (url, data) => {
    const method = data.id ? "PUT" : "POST"
    const newUrl = data.id ? `${ BASE_URL }${ url }${ data.id }/` : `${ BASE_URL }${ url }`
    return (await axios({
        method: method,
        url: newUrl,
        data: data
    }))
}
export const deleteData = async (url) => {
    return await axios.delete(`${ BASE_URL }${ url }`)
}