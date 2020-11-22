import axios from "axios"
import { BASE_URL } from "./index";

export default class CompanyTypesService {
    url = BASE_URL + "catalogs/types-of-companies/"

    getCompanyTypes = async () => {
        return await axios.get(this.url)
            .then(res => res.data)
    }

    deleteCompanyType = async item => {
        return await axios.delete(this.url + item.id)
            .then(res => res)
    }

    saveCompanyType = async item => {
        if (item.id) {
            return await axios.put(this.url + item.id + "/", item)
                .then(res => res.data)
        } else {
            return await axios.post(this.url, item).then(res => res.data)
        }
    }
}