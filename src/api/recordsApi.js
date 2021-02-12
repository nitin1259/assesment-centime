import { handleResponse, handleError } from "./apiUtils";
import { GREATER, LESSER, EQUALS } from "../config/constants";
const baseUrl = process.env.REACT_APP_API_URL + "/records/";

export function getRecords() {
  return fetch(baseUrl).then(handleResponse).catch(handleError);
}

export function getFilterRecords(field, value, operatorValue) {
  return fetch(baseUrl)
    .then(handleResponse)
    .then((records) => {
      console.log(field, value, operatorValue);
      let rec = [];
      switch (operatorValue) {
        case GREATER:
          rec = records.filter((r) => r[field] > value);
          break;
        case LESSER:
          rec = records.filter((r) => r[field] < value);
          break;
        case EQUALS:
          rec = records.filter((r) => r[field] == value);
          break;
        default:
          rec = records.filter((r) => r[field] > value);
          break;
      }

      return rec;
    })
    .catch(handleError);
}

export function saveRecord(record) {
  return fetch(baseUrl + (record.id || ""), {
    method: record.id ? "PUT" : "POST", // POST for create, PUT to update when id already exists.
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      ...record,
    }),
  })
    .then(handleResponse)
    .catch(handleError);
}

export function deleteRecord(recordId) {
  return fetch(baseUrl + recordId, { method: "DELETE" })
    .then(handleResponse)
    .catch(handleError);
}
