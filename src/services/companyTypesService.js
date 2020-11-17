import { getDataFromUrl } from "./index";

const transformType = (type) => {
    return {
        id: type.id,
        nameShort: type.name_short,
        nameFull: type.name_full
    }
}