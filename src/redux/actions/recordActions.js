import * as actionTypes from "./actionTypes";
import * as recordApi from "./../../api/recordsApi";

export function loadRecords() {
  return function (dispatch) {
    return recordApi
      .getRecords()
      .then((records) => {
        dispatch({ type: actionTypes.LOAD_RECORDS, records });
      })
      .catch((error) => {
        throw error;
      });
  };
}

export function saveRecord(record) {
  return function (dispatch) {
    return recordApi
      .saveRecord(record)
      .then((savedRecord) => {
        savedRecord.id
          ? dispatch({ type: actionTypes.UPDATE_RECORD, savedRecord })
          : dispatch({ type: actionTypes.CREATE_RECORD, savedRecord });
      })
      .catch((error) => {
        throw error;
      });
  };
}

export function deleteRecord(record) {
  return function (dispatch) {
    dispatch({ type: actionTypes.DELETE_RECORD, record });
    return recordApi.deleteRecord(record.id);
  };
}
