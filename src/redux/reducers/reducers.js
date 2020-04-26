import { combineReducers } from "redux";
import records from "./recordReducers";

const rootReducer = combineReducers({
  records,
});

export default rootReducer;
