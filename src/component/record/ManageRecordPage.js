import React, { useState } from "react";
import RecordForm from "./RecordForm";
import { saveRecord } from "../../api/recordsApi";
import { newRecord } from "../../api/apiUtils";

function ManageRecordPage() {
  const [record, setRecord] = useState(newRecord);
  const [errors, setErrors] = useState({});
  const [saving, setSaving] = useState(false);

  function isValidForm() {
    const errors = {};
    if (!record.title) errors.title = "Title is required";
    if (!record.from_party) errors.from_party = "From is required";
    if (!record.to_party) errors.to_party = "To is required";
    if (!record.amount) errors.amount = "To is required";

    setErrors(errors);
    return Object.keys(errors).length === 0;
  }

  function handleSave(event) {
    event.preventDefault();
    if (!isValidForm()) return;
    setSaving(true);
    saveRecord(record)
      .then(() => {
        // toast.success("Saved Successfully!!!");
        alert("Save succesfully");
      })
      .catch((err) => {
        console.log("error while saving form" + err);
        setErrors({
          onSave: err.message,
        });
        setSaving(false);
        // toast.error("Error while saving the data!!!");
      });
  }

  function handleChange(event) {
    event.preventDefault();
    const { name, value } = event.target;
    setRecord((prevCourse) => ({
      ...prevCourse,
      [name]: name === "authorId" ? parseInt(value, 10) : value,
    }));
  }

  return (
    <RecordForm
      record={record}
      errors={errors}
      onSave={handleSave}
      onChange={handleChange}
      saving={saving}
    />
  );
}

export default ManageRecordPage;
