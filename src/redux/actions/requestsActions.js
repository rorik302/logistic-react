import { removeRequest, saveRequestToDB } from "../../services/requestsService";
import moment from "moment";

export const FETCH_REQUESTS_SUCCESS = "FETCH_REQUESTS_SUCCESS"
export const REQUEST_SELECTED = "REQUEST_SELECTED"
export const SELECTED_REQUEST_CLEARED = "SELECTED_REQUEST_CLEARED"
export const REQUEST_DELETED = "REQUEST_DELETED"
export const REQUEST_CREATED = "REQUEST_CREATED"
export const REQUEST_UPDATED = "REQUEST_UPDATED"

export const fetchRequestsSuccess = payload => dispatch => dispatch({ type: FETCH_REQUESTS_SUCCESS, payload })
export const selectRequest = payload => dispatch => dispatch({ type: REQUEST_SELECTED, payload })
export const clearSelectedRequest = () => dispatch => dispatch({ type: SELECTED_REQUEST_CLEARED })
export const deleteRequest = payload => dispatch => {
    removeRequest(payload).then(() => dispatch({ type: REQUEST_DELETED, payload }))
}
export const saveRequest = payload => dispatch => {
    const newPayload = {
        ...payload,
        loading_date: moment(payload.loading_date).format("YYYY-MM-DD"),
        unloading_date: moment(payload.unloading_date).format("YYYY-MM-DD")
    }
    if (payload.id) {
        saveRequestToDB(newPayload).then(res => dispatch({ type: REQUEST_UPDATED, payload: res }))
    } else {
        saveRequestToDB(newPayload).then(res => dispatch({ type: REQUEST_CREATED, payload: res }))
    }
}