import { deleteData, getDataFromUrl, saveDataToUrl } from "./index";

export const fetchAllCompanyTypes = async () => {
    return await getDataFromUrl("catalogs/types-of-companies/")
        .then(res => res.data.map(item => transformTypeBackToFront(item)))
}

export const saveCompanyType = async (type) => {
    return await saveDataToUrl("catalogs/types-of-companies/", transformTypeFrontToBack(type))
        .then(res => transformTypeBackToFront(res.data))
}

export const deleteCompanyType = async (item) => {
    return await deleteData(`catalogs/types-of-companies/${item.id}/`)
}

export const transformTypeBackToFront = (type) => {
    return {
        id: type.id,
        nameShort: type.name_short,
        nameFull: type.name_full
    }
}

const transformTypeFrontToBack = (type) => {
    return {
        id: type.id,
        name_short: type.nameShort,
        name_full: type.nameFull
    }
}