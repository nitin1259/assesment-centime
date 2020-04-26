import React, { useState, useEffect } from "react";
import RecordForm from "./RecordForm";
import { saveRecord, loadRecords } from "../../redux/actions/recordActions";
import { newRecord } from "../../api/apiUtils";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import translate from "../../i18nProvider/translate";

function ManageRecordPage({
  saveRecord,
  loadRecords,
  records,
  history,
  ...props
}) {
  const [record, setRecord] = useState(props.record);
  const [errors, setErrors] = useState({});
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (records.length === 0) {
      loadRecords().catch((error) => {
        console.log("Error getting record " + error);
      });
    } else {
      setRecord({ ...props.record });
    }
  }, [props.record]);

  function isValidForm() {
    const errors = {};
    if (!record.title) errors.title = translate("titleReq");
    if (!record.from_party) errors.from_party = translate("fromReq");
    if (!record.to_party) errors.to_party = translate("toReq");
    if (!record.amount) errors.amount = translate("amountReq");

    setErrors(errors);
    return Object.keys(errors).length === 0;
  }

  function handleSave(event) {
    event.preventDefault();
    if (!isValidForm()) return;
    setSaving(true);
    saveRecord(record)
      .then(() => {
        toast.success("Saved Successfully!!!");
        history.push("/");
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
    setRecord((prevRecord) => ({
      ...prevRecord,
      [name]: name === "amount" ? parseInt(value, 10) : value,
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
  history: PropTypes.object.isRequired,
  record: PropTypes.object.isRequired,
  loadRecords: PropTypes.object.isRequired,
};

function getRecordByID(records, id) {
  return records.find((record) => record.id == id) || null;
}

const mapStateToPorps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const record =
    id && state.records.length > 0
      ? getRecordByID(state.records, id)
      : newRecord;
  return {
    record,
    records: state.records,
  };
};

const mapDispatchToProps = {
  saveRecord: saveRecord,
  loadRecords: loadRecords,
};
export default connect(mapStateToPorps, mapDispatchToProps)(ManageRecordPage);
