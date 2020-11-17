import { fetchAllCompanyTypes } from "../../services/companyTypesService";

export const GET_ALL_COMPANY_TYPES_REQUEST = "GET_ALL_COMPANY_TYPES_REQUEST"
export const GET_ALL_COMPANY_TYPES_SUCCESS = "GET_ALL_COMPANY_TYPES_SUCCESS"
export const SAVE_COMPANY_TYPES_REQUEST = "SAVE_COMPANY_TYPES_REQUEST"
export const SAVE_COMPANY_TYPES_SUCCESS = "SAVE_COMPANY_TYPES_SUCCESS"
export const DELETE_COMPANY_TYPES_REQUEST = "DELETE_COMPANY_TYPES_REQUEST"
export const DELETE_COMPANY_TYPES_SUCCESS = "DELETE_COMPANY_TYPES_SUCCESS"

export const getAllCompanyTypesRequest = () => ({ type: GET_ALL_COMPANY_TYPES_REQUEST })
export const getAllCompanyTypesSuccess = (payload) => ({ type: GET_ALL_COMPANY_TYPES_SUCCESS, payload })
export const saveCompanyTypeRequest = () => ({ type: SAVE_COMPANY_TYPES_REQUEST })
export const saveCompanyTypeSuccess = () => ({ type: SAVE_COMPANY_TYPES_SUCCESS })
export const deleteCompanyTypeRequest = () => ({ type: DELETE_COMPANY_TYPES_REQUEST })
export const deleteCompanyTypeSuccess = () => ({ type: DELETE_COMPANY_TYPES_SUCCESS })

export const getAllCompanyTypes = () => (dispatch) => {
    dispatch(getAllCompanyTypesRequest())
    fetchAllCompanyTypes()
        .then(res => dispatch(getAllCompanyTypesSuccess(res)))
}