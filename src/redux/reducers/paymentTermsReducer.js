import {
    CLEAR_PAYMENT_TERM, DELETE_PAYMENT_TERM_SUCCESS,
    FETCH_ALL_PAYMENT_TERMS_SUCCESS,
    SELECT_PAYMENT_TERM,
    CREATE_PAYMENT_TERM_SUCCESS,
    UPDATE_PAYMENT_TERM_SUCCESS
} from "../actions/paymentTermsActions";

const initialState = {
    paymentTermsList: [],
    selected: {}
}

export const paymentTermsReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case FETCH_ALL_PAYMENT_TERMS_SUCCESS:
            return {
                ...state,
                paymentTermsList: payload
            }
        case SELECT_PAYMENT_TERM:
            return {
                ...state,
                selected: payload
            }
        case CLEAR_PAYMENT_TERM:
            return {
                ...state,
                selected: initialState.selected
            }
        case CREATE_PAYMENT_TERM_SUCCESS:
            return {
                ...state,
                paymentTermsList: [
                    ...state.paymentTermsList,
                    payload
                ]
            }
        case UPDATE_PAYMENT_TERM_SUCCESS:
            return {
                ...state,
                paymentTermsList: state.paymentTermsList.map(item => item.id === payload.id ? { ...payload } : item)
            }
        case DELETE_PAYMENT_TERM_SUCCESS:
            return {
                ...state,
                paymentTermsList: state.paymentTermsList.filter(item => item.id !== payload.id)
            }
        default:
            return state
    }
}