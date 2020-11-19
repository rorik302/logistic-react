import { getDataFromUrl } from "./index";
import { transformTypeBackToFront as companyTypesTransformBackToFront } from "./companyTypesService";

const url = "companies/"

export const fetchAllContractors = async () => {
    return await getDataFromUrl(url)
        .then(res => res.data.map(item => transpormBackToFront(item)))
}

const transpormBackToFront = (item) => {
    return {
        id: item.id,
        companyType: companyTypesTransformBackToFront(item.type_of_company),
        isCustomer: item.is_customer,
        isTransporter: item.is_transporter,
        name: item.name,
        inn: item.inn,
        address: item.address
    }
}