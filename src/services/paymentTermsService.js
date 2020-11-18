import { deleteData, getDataFromUrl } from "./index";

const url = "catalogs/terms-of-payments/"

export const fetchPaymentTerms = async () => {
    return await getDataFromUrl(url)
        .then(res => res.data.map(item => transformBackToFront(item)))
}

export const deletePaymentTerm = async (item) => {
    return await deleteData(`${url}${item.id}/`)
}
const transformBackToFront = (item) => ({
    id: item.id,
    daysCount: item.days_count,
    daysType: item.days_type,
    reason: item.reason
})

const transformFrontToBack = (item) => ({
    days_count: item.daysCount,
    days_type: item.daysType,
    reason: item.reason
})