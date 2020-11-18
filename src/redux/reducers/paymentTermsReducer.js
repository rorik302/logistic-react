import {
    CLEAT_PAYMENT_TERM, DELETE_PAYMENT_TERM_SUCCESS,
    FETCH_ALL_PAYMENT_TERMS_SUCCESS,
    SELECT_PAYMENT_TERM
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
        case CLEAT_PAYMENT_TERM:
            return {
                ...state,
                selected: initialState.selected
            }
        case DELETE_PAYMENT_TERM_SUCCESS:
            return {
                ...state,
                paymentTermsList: state.paymentTermsList.filter(item => item.id !== payload.id)
            }
        default: return state
    }
}