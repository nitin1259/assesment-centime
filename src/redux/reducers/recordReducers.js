import * as actionTypes from "./../actions/actionTypes";
import initialStates from "./../initialstates";

//step 2: creating the reducer function for the first action....
export default function recordReducer(state = initialStates.records, action) {
  switch (action.type) {
    case actionTypes.LOAD_RECORDS:
      return action.records;
    case actionTypes.CREATE_RECORD:
      return [...state, { ...action.record }];
    case actionTypes.UPDATE_RECORD:
      return state.map((c) => (c.id === action.record.id ? action.record : c));
    case actionTypes.DELETE_RECORD:
      return state.filter((record) => record.id !== action.record.id);
    default:
      return state;
  }
}
