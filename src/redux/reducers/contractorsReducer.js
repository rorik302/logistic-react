import { FETCH_CONTRACTORS_SUCCESS } from "../actions/contractorsActions";

const initialState = {
    contractorsList: [],
    selectedContractor: null
}

export const contractorsReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case FETCH_CONTRACTORS_SUCCESS:
            return {
                ...state,
                contractorsList: payload
            }
        default: return state
    }
}