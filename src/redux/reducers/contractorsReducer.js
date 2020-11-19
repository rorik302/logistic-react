import { FETCH_ALL_CONTRACTORS_SUCCESS } from "../actions/contractorsActions";

const initialState = {
    contractorsList: [],
    selected: {}
}

export const contractorsReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case FETCH_ALL_CONTRACTORS_SUCCESS:
            return {
                ...state,
                contractorsList: payload
            }
        default: return state
    }
}

