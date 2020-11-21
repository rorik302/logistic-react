import {
    FORM_MODAL_OPENED,
    DELETE_CONFIRM_MODAL_OPENED,
    FORM_MODAL_CLOSED,
    DELETE_CONFIRM_MODAL_CLOSED
} from "../actions/modalsActions";

const initialState = {
    showFormModal: false,
    formModalTitle: null,
    showDeleteConfirmModal: false
}

export const modalsReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case FORM_MODAL_OPENED:
            return {
                ...state,
                showFormModal: true,
                formModalTitle: payload
            }
        case FORM_MODAL_CLOSED:
            return {
                ...state,
                showFormModal: initialState.showFormModal,
                formModalTitle: initialState.formModalTitle
            }
        case DELETE_CONFIRM_MODAL_OPENED:
            return {
                ...state,
                showDeleteConfirmModal: true
            }
        case DELETE_CONFIRM_MODAL_CLOSED:
            return {
                ...state,
                showDeleteConfirmModal: initialState.showDeleteConfirmModal
            }
        default:
            return state
    }
}