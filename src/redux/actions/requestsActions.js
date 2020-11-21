import { removeRequest } from "../../services/requestsService";

export const FETCH_REQUESTS_SUCCESS = "FETCH_REQUESTS_SUCCESS"
export const REQUEST_SELECTED = "REQUEST_SELECTED"
export const SELECTED_REQUEST_CLEARED = "SELECTED_REQUEST_CLEARED"
export const REQUEST_DELETED = "REQUEST_DELETED"

export const fetchRequestsSuccess = payload => dispatch => dispatch({ type: FETCH_REQUESTS_SUCCESS, payload })
export const selectRequest = payload => dispatch => dispatch({ type: REQUEST_SELECTED, payload })
export const clearSelectedRequest = () => dispatch => dispatch({ type: SELECTED_REQUEST_CLEARED })
export const deleteRequest = payload => dispatch => {
    removeRequest(payload).then(() => dispatch({ type: REQUEST_DELETED, payload }))
}