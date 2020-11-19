import { fetchAllContractors } from "../../services/contractorsService";

export const FETCH_ALL_CONTRACTORS_SUCCESS = "FETCH_ALL_CONTRACTORS_SUCCESS"

const fetchAllAC = (payload) => ({ type: FETCH_ALL_CONTRACTORS_SUCCESS, payload})

export const fetchAll = () => dispatch => {
    fetchAllContractors()
        .then(res => dispatch(fetchAllAC(res)))
}
const create = () => {}
const update = () => {}
const remove = () => {}