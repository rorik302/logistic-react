import {
    FETCH_ALL_CONTRACTORS_SUCCESS,
    CONTRACTOR_SELECTED,
    CONTRACTOR_CLEARED,
    CONTRACTOR_DELETED
} from "../actions/contractorsActions";

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
        case CONTRACTOR_SELECTED:
            return {
                ...state,
                selected: payload
            }
        case CONTRACTOR_CLEARED:
            return {
                ...state,
                selected: initialState.selected
            }
        case CONTRACTOR_DELETED:
            return {
                ...state,
                contractorsList: state.contractorsList.filter(item => item.id !== payload.id)
            }
        default:
            return state
    }
}
