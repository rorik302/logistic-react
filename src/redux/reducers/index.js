import { combineReducers } from "redux";
import { contractorsReducer } from "./contractorsReducer";
import { modalsReducer } from "./modals";
import { requestsReducer } from "./requestsReducer";

export const rootReducer = combineReducers({
    modals: modalsReducer,
    contractors: contractorsReducer,
    requests: requestsReducer
})