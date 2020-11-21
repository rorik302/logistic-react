import { deleteData, getDataFromUrl } from "./index";

const url = "requests/"

export const getRequests = async () => {
    return await getDataFromUrl(url)
        .then(res => res.data)
}

export const removeRequest = async item => {
    return await deleteData(`${url}${item.id}/`)
        .then(res => res)
}