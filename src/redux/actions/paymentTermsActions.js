import { deletePaymentTerm, fetchPaymentTerms, savePaymentTerm } from "../../services/paymentTermsService";

export const FETCH_ALL_PAYMENT_TERMS_SUCCESS = "FETCH_ALL_PAYMENT_TERMS_SUCCESS"
export const SELECT_PAYMENT_TERM = "SELECT_PAYMENT_TERM"
export const CLEAR_PAYMENT_TERM = "CLEAR_PAYMENT_TERM"
export const CREATE_PAYMENT_TERM_SUCCESS = "CREATE_PAYMENT_TERM_SUCCESS"
export const UPDATE_PAYMENT_TERM_SUCCESS = "UPDATE_PAYMENT_TERM_SUCCESS"
export const DELETE_PAYMENT_TERM_SUCCESS = "DELETE_PAYMENT_TERM_SUCCESS"

const fetchAllPaymentTermsSuccess = (payload) => ({ type: FETCH_ALL_PAYMENT_TERMS_SUCCESS, payload })

export const fetchAllPaymentTerms = () => (dispatch) => {
    fetchPaymentTerms()
        .then(res => dispatch(fetchAllPaymentTermsSuccess(res)))
}

export const selectPaymentTerm = (payload) => ({ type: SELECT_PAYMENT_TERM, payload })
export const clearPaymentTerm = () => ({ type: CLEAR_PAYMENT_TERM })

export const createPaymentTermSuccess = (payload) => ({ type: CREATE_PAYMENT_TERM_SUCCESS, payload })
export const updatePaymentTermSuccess = (payload) => ({ type: UPDATE_PAYMENT_TERM_SUCCESS, payload })
export const submitPaymentTerm = (item) => (dispatch) => {
    if (item.id) {
        savePaymentTerm(item)
            .then(res => dispatch(updatePaymentTermSuccess(res)))
    } else {
        savePaymentTerm(item)
            .then(res => dispatch(createPaymentTermSuccess(res)))
    }
}

export const deletePaymentTermSuccess = (payload) => ({ type: DELETE_PAYMENT_TERM_SUCCESS, payload })
export const removePaymentTerm = (item) => (dispatch) => {
    deletePaymentTerm(item)
        .then(() => dispatch(deletePaymentTermSuccess(item)))
}