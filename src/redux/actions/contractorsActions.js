import { deleteContractor, fetchAllContractors } from "../../services/contractorsService";
import { hide } from "redux-modal";

export const FETCH_ALL_CONTRACTORS_SUCCESS = "FETCH_ALL_CONTRACTORS_SUCCESS"
export const CONTRACTOR_SELECTED = "CONTRACTOR_SELECTED"
export const CONTRACTOR_CLEARED = "CONTRACTOR_CLEARED"
export const CONTRACTOR_DELETED = "CONTRACTOR_DELETED"

const fetchAllAC = (payload) => ({ type: FETCH_ALL_CONTRACTORS_SUCCESS, payload })
const selectAC = (payload) => ({ type: CONTRACTOR_SELECTED, payload })
const clearAC = () => ({ type: CONTRACTOR_CLEARED })
const removeAC = (payload) => ({ type: CONTRACTOR_DELETED, payload })

export const fetchAll = () => dispatch => {
    fetchAllContractors()
        .then(res => dispatch(fetchAllAC(res)))
}

export const select = (payload) => dispatch => {
    dispatch(selectAC(payload))
}

export const clear = () => dispatch => {
    dispatch(clearAC())
}

const create = () => {
}
const update = () => {
}
export const remove = payload => dispatch => {
    deleteContractor(payload)
        .then(() => {
            dispatch(hide("ContractorDeleteDialog"))
            dispatch(removeAC(payload))
            dispatch(clearAC())
        })
}