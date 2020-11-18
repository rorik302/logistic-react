import { deletePaymentTerm, fetchPaymentTerms } from "../../services/paymentTermsService";

export const FETCH_ALL_PAYMENT_TERMS_SUCCESS = "FETCH_ALL_PAYMENT_TERMS_SUCCESS"
export const SELECT_PAYMENT_TERM = "SELECT_PAYMENT_TERM"
export const CLEAT_PAYMENT_TERM = "CLEAT_PAYMENT_TERM"
export const DELETE_PAYMENT_TERM_SUCCESS = "DELETE_PAYMENT_TERM_SUCCESS"

const fetchAllPaymentTermsSuccess = (payload) => ({ type: FETCH_ALL_PAYMENT_TERMS_SUCCESS, payload })

export const fetchAllPaymentTerms = () => (dispatch) => {
    fetchPaymentTerms()
        .then(res => dispatch(fetchAllPaymentTermsSuccess(res)))
}

export const selectPaymentTerm = (payload) => ({ type: SELECT_PAYMENT_TERM, payload })
export const clearPaymentTerm = () => ({ type: CLEAT_PAYMENT_TERM })

export const deletePaymentTermSuccess = (payload) => ({ type: DELETE_PAYMENT_TERM_SUCCESS, payload })
export const removePaymentTerm = (item) => (dispatch) => {
    deletePaymentTerm(item)
        .then(() => dispatch(deletePaymentTermSuccess(item)))
}