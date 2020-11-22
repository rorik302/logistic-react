export const FETCH_CONTRACTORS_SUCCESS = "FETCH_CONTRACTORS_SUCCESS"
export const CONTRACTOR_SELECTED = "CONTRACTOR_SELECTED"
export const CONTRACTOR_CLEARED = "CONTRACTOR_CLEARED"
export const CONTRACTOR_DELETED = "CONTRACTOR_DELETED"
export const CONTRACTOR_UPDATED = "CONTRACTOR_UPDATED"
export const CONTRACTOR_CREATE = "CONTRACTOR_CREATE"

export const fetchContractorsSuccess = payload => dispatch => dispatch({ type: FETCH_CONTRACTORS_SUCCESS, payload })
export const selectContractor = payload => dispatch => dispatch({ type: CONTRACTOR_SELECTED, payload })
export const clearSelectedContractor = () => dispatch => dispatch({ type: CONTRACTOR_CLEARED })
export const deleteContractor = payload => dispatch => dispatch({ type: CONTRACTOR_DELETED, payload })
export const contractorUpdated = payload => dispatch => dispatch({ type: CONTRACTOR_UPDATED, payload })
export const contractorCreated = payload => dispatch => dispatch({ type: CONTRACTOR_CREATE, payload })
