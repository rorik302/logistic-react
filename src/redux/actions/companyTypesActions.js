export const FETCH_COMPANY_TYPES_SUCCESS = "FETCH_COMPANY_TYPES_SUCCESS"
export const COMPANY_TYPE_SELECTED = "COMPANY_TYPE_SELECTED"
export const COMPANY_TYPE_CLEARED = "COMPANY_TYPE_CLEARED"
export const COMPANY_TYPE_DELETED = "COMPANY_TYPE_DELETED"
export const COMPANY_TYPE_UPDATED = "COMPANY_TYPE_UPDATED"

export const fetchCompanyTypesSuccess = payload => dispatch => dispatch({ type: FETCH_COMPANY_TYPES_SUCCESS, payload })
export const selectCompanyType = payload => dispatch => dispatch({ type: COMPANY_TYPE_SELECTED, payload })
export const clearSelectedCompanyType = () => dispatch => dispatch({ type: COMPANY_TYPE_CLEARED })
export const deleteCompanyType = payload => dispatch => dispatch({ type: COMPANY_TYPE_DELETED, payload })
export const companyTypeUpdated = payload => dispatch => dispatch({ type: COMPANY_TYPE_UPDATED, payload })