import {
    COMPANY_TYPE_SELECTED,
    GET_ALL_COMPANY_TYPES_SUCCESS,
    COMPANY_TYPE_CLEARED,
    UPDATE_COMPANY_TYPE_SUCCESS, CREATE_COMPANY_TYPES_SUCCESS,
    DELETE_COMPANY_TYPES_SUCCESS
} from "../actions/companyTypesActions";

const initialState = {
    companyTypesList: [],
    selectedItem: {}
}

export const companyTypesReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_ALL_COMPANY_TYPES_SUCCESS:
            return {
                ...state,
                companyTypesList: payload
            }
        case COMPANY_TYPE_SELECTED:
            return {
                ...state,
                selectedItem: payload
            }
        case COMPANY_TYPE_CLEARED:
            return {
                ...state,
                selectedItem: initialState.selectedItem
            }
        case CREATE_COMPANY_TYPES_SUCCESS:
            return {
                ...state,
                companyTypesList: [
                    ...state.companyTypesList,
                    payload
                ]
            }
        case UPDATE_COMPANY_TYPE_SUCCESS:
            return {
                ...state,
                companyTypesList: state.companyTypesList.map(item => item.id === payload.id ? { ...payload } : item)
            }
        case DELETE_COMPANY_TYPES_SUCCESS:
            return {
                ...state,
                companyTypesList: state.companyTypesList.filter(item => item.id !== payload.id)
            }
        default:
            return state
    }
}