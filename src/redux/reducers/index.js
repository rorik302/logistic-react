import { combineReducers } from "redux";
import { companyTypesReducer } from "./companyTypesReducer";

export const rootReducer = combineReducers({
    companyTypes: companyTypesReducer
})