import {
    FETCH_COMPANY_TYPES_SUCCESS,
    COMPANY_TYPE_SELECTED,
    COMPANY_TYPE_CLEARED,
    COMPANY_TYPE_DELETED,
    COMPANY_TYPE_UPDATED, COMPANY_TYPE_CREATED
} from "../actions/companyTypesActions";

const initialState = {
    companyTypesList: [],
    selectedCompanyType: null,
}

export const companyTypesReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case FETCH_COMPANY_TYPES_SUCCESS:
            return {
                ...state,
                companyTypesList: payload
            }
        case COMPANY_TYPE_SELECTED:
            return {
                ...state,
                selectedCompanyType: payload
            }
        case COMPANY_TYPE_CLEARED:
            return {
                ...state,
                selectedCompanyType: initialState.selectedCompanyType
            }
        case COMPANY_TYPE_DELETED:
            return {
                ...state,
                companyTypesList: state.companyTypesList.filter(item => item.id !== payload.id),
                selectedCompanyType: initialState.selectedCompanyType
            }
        case COMPANY_TYPE_CREATED:
            return {
                ...state,
                companyTypesList: [
                    ...state.companyTypesList,
                    payload
                ],
                selectedCompanyType: initialState.selectedCompanyType
            }
        case COMPANY_TYPE_UPDATED:
            return {
                ...state,
                companyTypesList: state.companyTypesList.map(item => item.id === payload.id ? { ...payload } : item),
                selectedCompanyType: initialState.selectedCompanyType
            }
        default:
            return state
    }
}