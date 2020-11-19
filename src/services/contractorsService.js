import { deleteData, getDataFromUrl, saveDataToUrl } from "./index";
import {
    transformTypeBackToFront as companyTypesTransformBackToFront,
    transformTypeFrontToBack
} from "./companyTypesService";

const url = "companies/"

export const fetchAllContractors = async () => {
    return await getDataFromUrl(url)
        .then(res => res.data.map(item => transformBackToFront(item)))
}

export const deleteContractor = async item => {
    return await deleteData(`${url}${item.id}/`)
}

export const saveContractor = async item => {
    return await saveDataToUrl(`${url}`, transformFrontToBack(item))
        .then(res => transformBackToFront(res.data))
}

const transformBackToFront = item => {
    return {
        id: item.id,
        companyType: companyTypesTransformBackToFront(item.type_of_company),
        isCustomer: item.is_customer,
        isTransporter: item.is_transporter || false,
        name: item.name,
        inn: item.inn,
        address: item.address
    }
}

const transformFrontToBack = item => {
    return {
        id: item.id,
        type_of_company: transformTypeFrontToBack(item.companyType),
        is_customer: item.isCustomer || false,
        is_transporter: item.isTransporter || false,
        name: item.name,
        inn: item.inn,
        address: item.address
    }
}