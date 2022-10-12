import {combineReducers} from "redux";
import logeReducer from './logReducer';

export default combineReducers({
    log:logeReducer
})