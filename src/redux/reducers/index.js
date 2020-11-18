import { combineReducers } from "redux";
import { companyTypesReducer } from "./companyTypesReducer";
import { reducer as formReducer } from 'redux-form'
import { reducer as modal } from 'redux-modal'

export const rootReducer = combineReducers({
    form: formReducer,
    modal,
    companyTypes: companyTypesReducer
})