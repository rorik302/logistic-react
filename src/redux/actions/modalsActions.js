export const FORM_MODAL_OPENED = "FORM_MODAL_OPENED"
export const FORM_MODAL_CLOSED = "FORM_MODAL_CLOSED"
export const DELETE_CONFIRM_MODAL_OPENED = "DELETE_CONFIRM_MODAL_OPENED"
export const DELETE_CONFIRM_MODAL_CLOSED = "DELETE_CONFIRM_MODAL_CLOSED"

export const openFormModal = payload => dispatch => dispatch({ type: FORM_MODAL_OPENED, payload })
export const closeFormModal = () => dispatch => dispatch({ type: FORM_MODAL_CLOSED })
export const openDeleteConfirmModal = () => dispatch => dispatch({ type: DELETE_CONFIRM_MODAL_OPENED })
export const closeDeleteConfirmModal = () => dispatch => dispatch({ type: DELETE_CONFIRM_MODAL_CLOSED })