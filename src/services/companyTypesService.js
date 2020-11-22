import axios from "axios"
import { BASE_URL } from "./index";

export default class CompanyTypesService {
    url = "catalogs/types-of-companies/"

    getCompanyTypes = async () => {
        return await axios.get(BASE_URL + this.url)
            .then(res => res.data)
    }
}