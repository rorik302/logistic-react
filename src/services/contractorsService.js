import axios from "axios"
import { BASE_URL } from "./index";

export default class ContractorsService {
    url = "companies/"

    getContractors = async () => {
        return await axios.get(BASE_URL + this.url).then(res => res.data)
    }
}

