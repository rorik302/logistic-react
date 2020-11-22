import axios from "axios"
import { BASE_URL } from "./index";

export default class ContractorsService {
    url = "companies/"

    getContractors = async () => {
        return await axios.get(BASE_URL + this.url).then(res => res.data)
    }

    deleteContractor = async item => {
        return await axios.delete(BASE_URL + this.url + item.id).then(res => res)
    }

    saveContractor = async item => {
        if (item.id) {
            return await axios.put(BASE_URL + this.url + item.id + "/", item).then(res => res.data)
        } else {
            return await axios.post(BASE_URL + this.url, item).then(res => res.data)
        }
    }
}

