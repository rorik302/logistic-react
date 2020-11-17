import { getDataFromUrl } from "./index";

export const fetchAllCompanyTypes = async () => {
    return await getDataFromUrl("catalogs/types-of-companies/")
        .then(res => res.data.map(item => transformType(item)))
}

const transformType = (type) => {
    return {
        id: type.id,
        nameShort: type.name_short,
        nameFull: type.name_full
    }
}