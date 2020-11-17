import { GET_ALL_COMPANY_TYPES_SUCCESS } from "../actions/companyTypesActions";

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
        default: return state
    }
}