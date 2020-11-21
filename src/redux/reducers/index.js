import { combineReducers } from "redux";
import { companyTypesReducer } from "./companyTypesReducer";
import { paymentTermsReducer } from "./paymentTermsReducer";
import { contractorsReducer } from "./contractorsReducer";
import { modalsReducer } from "./modals";
import { requestsReducer } from "./requestsReducer";

export const rootReducer = combineReducers({
    modals: modalsReducer,
    companyTypes: companyTypesReducer,
    paymentTerms: paymentTermsReducer,
    contractors: contractorsReducer,
    requests: requestsReducer
})