import { fetchAllCompanyTypes, saveCompanyType } from "../../services/companyTypesService";

export const GET_ALL_COMPANY_TYPES_REQUEST = "GET_ALL_COMPANY_TYPES_REQUEST"
export const GET_ALL_COMPANY_TYPES_SUCCESS = "GET_ALL_COMPANY_TYPES_SUCCESS"
export const CREATE_COMPANY_TYPES_REQUEST = "SAVE_COMPANY_TYPES_REQUEST"
export const CREATE_COMPANY_TYPES_SUCCESS = "SAVE_COMPANY_TYPES_SUCCESS"
export const UPDATE_COMPANY_TYPE_REQUEST = "UPDATE_COMPANY_TYPE_REQUEST"
export const UPDATE_COMPANY_TYPE_SUCCESS = "UPDATE_COMPANY_TYPE_SUCCESS"
export const DELETE_COMPANY_TYPES_REQUEST = "DELETE_COMPANY_TYPES_REQUEST"
export const DELETE_COMPANY_TYPES_SUCCESS = "DELETE_COMPANY_TYPES_SUCCESS"
export const COMPANY_TYPE_SELECTED = "COMPANY_TYPE_SELECTED"
export const COMPANY_TYPE_CLEARED = "COMPANY_TYPE_CLEARED"

export const getAllCompanyTypesRequest = () => ({ type: GET_ALL_COMPANY_TYPES_REQUEST })
export const getAllCompanyTypesSuccess = (payload) => ({ type: GET_ALL_COMPANY_TYPES_SUCCESS, payload })
export const createCompanyTypeRequest = () => ({ type: CREATE_COMPANY_TYPES_REQUEST })
export const createCompanyTypeSuccess = (payload) => ({ type: CREATE_COMPANY_TYPES_SUCCESS, payload })
export const updateCompanyTypeRequest = () => ({ type: UPDATE_COMPANY_TYPE_REQUEST })
export const updateCompanyTypeSuccess = (payload) => ({ type: UPDATE_COMPANY_TYPE_SUCCESS, payload })
export const deleteCompanyTypeRequest = () => ({ type: DELETE_COMPANY_TYPES_REQUEST })
export const deleteCompanyTypeSuccess = () => ({ type: DELETE_COMPANY_TYPES_SUCCESS })
export const companyTypeSelected = (payload) => ({ type: COMPANY_TYPE_SELECTED, payload })
export const clearCompanyType = () => dispatch => dispatch({ type: COMPANY_TYPE_CLEARED })

export const getAllCompanyTypes = () => (dispatch) => {
    dispatch(getAllCompanyTypesRequest())
    fetchAllCompanyTypes()
        .then(res => dispatch(getAllCompanyTypesSuccess(res)))
}

export const selectCompanyType = (item) => (dispatch) => {
    dispatch(companyTypeSelected(item))
}

const createCompanyType = (values) => (dispatch) => {
    dispatch(createCompanyTypeRequest())
    saveCompanyType(values)
        .then(res => dispatch(createCompanyTypeSuccess(res)))
}

const updateCompanyType = (values) => (dispatch) => {
    dispatch(updateCompanyTypeRequest())
    saveCompanyType(values)
        .then(res => dispatch(updateCompanyTypeSuccess(res)))
}

export const submitCompanyType = (values) => (dispatch) => {
    if (values.id) {
        dispatch(updateCompanyType(values))
    } else {
        dispatch(createCompanyType(values))
    }
}