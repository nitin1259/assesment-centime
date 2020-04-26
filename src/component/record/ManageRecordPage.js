import React, { useState } from "react";
import RecordForm from "./RecordForm";
import { saveRecord } from "../../redux/actions/recordActions";
import { newRecord } from "../../api/apiUtils";
import { connect } from "react-redux";
import PropTypes from "prop-types";

function ManageRecordPage({ saveRecord }) {
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
    saveRecord(record).catch((err) => {
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

ManageRecordPage.propTypes = {
  records: PropTypes.array.isRequired,
  saveRecord: PropTypes.func.isRequired,
};

const mapStateToPorps = ({ records }) => {
  return {
    records,
  };
};

const mapDispatchToProps = {
  saveRecord: saveRecord,
};
export default connect(mapStateToPorps, mapDispatchToProps)(ManageRecordPage);
