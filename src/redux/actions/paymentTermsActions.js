import { fetchPaymentTerms } from "../../services/paymentTermsService";

export const FETCH_ALL_PAYMENT_TERMS_SUCCESS = "FETCH_ALL_PAYMENT_TERMS_SUCCESS"

const fetchAllPaymentTermsSuccess = (payload) => ({ type: FETCH_ALL_PAYMENT_TERMS_SUCCESS, payload })

export const fetchAllPaymentTerms = () => (dispatch) => {
    fetchPaymentTerms()
        .then(res => dispatch(fetchAllPaymentTermsSuccess(res)))
}