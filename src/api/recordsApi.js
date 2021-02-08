import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.REACT_APP_API_URL + "/records/";

export function getRecords() {
  return fetch(baseUrl).then(handleResponse).catch(handleError);
}

export function getFilterRecords(field, value) {
  return fetch(baseUrl)
    .then(handleResponse)
    .then((records) => {
      // console.log(field, value);
      const rec = records.filter((r) => r[field] > value);
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
