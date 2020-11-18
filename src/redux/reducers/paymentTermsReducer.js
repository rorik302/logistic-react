import { FETCH_ALL_PAYMENT_TERMS_SUCCESS } from "../actions/paymentTermsActions";

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
        default: return state
    }
}