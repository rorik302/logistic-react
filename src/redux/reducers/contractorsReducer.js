import { FETCH_CONTRACTORS_SUCCESS, CONTRACTOR_SELECTED, CONTRACTOR_CLEARED, CONTRACTOR_DELETED } from "../actions/contractorsActions";

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
        case CONTRACTOR_SELECTED:
            return {
                ...state,
                selectedContractor: payload
            }
        case CONTRACTOR_CLEARED:
            return {
                ...state,
                selectedContractor: initialState.selectedContractor
            }
        case CONTRACTOR_DELETED:
            return {
                ...state,
                contractorsList: state.contractorsList.filter(item => item.id !== payload.id),
                selectedContractor: initialState.selectedContractor
            }
        default:
            return state
    }
}