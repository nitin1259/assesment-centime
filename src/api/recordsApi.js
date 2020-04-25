import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.REACT_APP_API_URL + "/records/";

export function getRecords() {
  return fetch(baseUrl).then(handleResponse).catch(handleError);
}

export function saveRecord(course) {
  return fetch(baseUrl + (course.id || ""), {
    method: course.id ? "PUT" : "POST", // POST for create, PUT to update when id already exists.
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      ...course,
      authorId: parseInt(course.authorId, 10), // Parse authorId to a number (in case it was sent as a string).
    }),
  })
    .then(handleResponse)
    .catch(handleError);
}

export function deleteRecord(courseId) {
  return fetch(baseUrl + courseId, { method: "DELETE" })
    .then(handleResponse)
    .catch(handleError);
}
