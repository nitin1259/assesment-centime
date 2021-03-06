import React from "react";
import PropTypes from "prop-types";
import TextInput from "../common/TextInput";
import "./Record.css";
import translate from "../../i18nProvider/translate";
import { Link } from "react-router-dom";
import "./Record.css";
// import SelectInput from "../common/SelectInput";

function RecordForm({ record, onSave, errors, onChange, saving = false }) {
  return (
    <form onSubmit={onSave} className="form-class">
      <h2>{record.id ? translate("editRecord") : translate("addRecord")}</h2>
      {errors && errors.onSave && (
        <div className="alert alert-danger" role="alert">
          {errors.onSave}
        </div>
      )}
      <TextInput
        name="title"
        label="Title"
        value={record.title}
        onChange={onChange}
        error={errors && errors.title}
      />

      <TextInput
        name="from_party"
        label="From"
        value={record.from_party}
        onChange={onChange}
        error={errors && errors.from_party}
      />

      <TextInput
        name="to_party"
        label="To"
        value={record.to_party}
        onChange={onChange}
        error={errors && errors.to_party}
      />

      <TextInput
        name="amount"
        label="Amount"
        value={record.amount}
        onChange={onChange}
        error={errors && errors.amount}
      />

      <button type="submit" disabled={saving} className="btn btn-primary">
        {saving ? "Saving..." : "Save"}
      </button>
      <Link to="/" className="btn btn-primary add-record">
        {translate("close")}
      </Link>
    </form>
  );
}

RecordForm.propTypes = {
  onSave: PropTypes.func.isRequired,
  record: PropTypes.object.isRequired,
  errors: PropTypes.object,
  onChange: PropTypes.func.isRequired,
  saving: PropTypes.bool.isRequired,
};

export default RecordForm;
