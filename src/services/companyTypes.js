import { getResourse } from "./index";

export const getAllCompanyTypes = async () => {
    const res = await getResourse("catalogs/types-of-companies/")
    return res.map(item => transformType(item))
}

const transformType = (type) => {
    return {
        id: type.id,
        nameShort: type.name_short,
        nameFull: type.name_full
    }
}