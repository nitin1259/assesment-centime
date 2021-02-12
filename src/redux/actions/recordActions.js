import * as actionTypes from "./actionTypes";
import * as recordApi from "./../../api/recordsApi";
import { GREATER } from "../../config/constants";

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

export function getFilterRecords(field = "amount", value = 0, operatorValue) {
  return function (dispatch) {
    // console.log(field, value);
    return recordApi
      .getFilterRecords(field, value, operatorValue)
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
        record.id
          ? dispatch({ type: actionTypes.UPDATE_RECORD, record: savedRecord })
          : dispatch({ type: actionTypes.CREATE_RECORD, record: savedRecord });
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
