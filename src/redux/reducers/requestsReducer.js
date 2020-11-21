import {
    REQUEST_SELECTED,
    SELECTED_REQUEST_CLEARED,
    REQUEST_DELETED,
    FETCH_REQUESTS_SUCCESS,
    REQUEST_UPDATED,
    REQUEST_CREATED
} from "../actions/requestsActions";

const initialState = {
    requestsList: [],
    selectedRequest: null
}

export const requestsReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case FETCH_REQUESTS_SUCCESS:
            return {
                ...state,
                requestsList: payload
            }
        case REQUEST_SELECTED:
            return {
                ...state,
                selectedRequest: payload
            }
        case SELECTED_REQUEST_CLEARED:
            return {
                ...state,
                selectedRequest: initialState.selectedRequest
            }
        case REQUEST_CREATED:
            return {
                ...state,
                requestsList: [
                    ...state.requestsList,
                    payload
                ]
            }
        case REQUEST_UPDATED:
            return {
                ...state,
                requestsList: state.requestsList.map(item => item.id === payload.id ? { ...payload } : item)
            }
        case REQUEST_DELETED:
            return {
                ...state,
                requestsList: state.requestsList.filter(item => item.id !== payload.id),
                selectedRequest: initialState.selectedRequest
            }
        default:
            return state
    }
}