import { FETCH_COMPANY_TYPES_SUCCESS } from "../actions/companyTypesActions";

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
        default: return state
    }
}