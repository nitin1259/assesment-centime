import React, { useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import * as recordActions from "./../../redux/actions/recordActions";
import { bindActionCreators } from "redux";
import { Redirect } from "react-router-dom";
import { toast } from "react-toastify";
import RecordList from "./RecordList";

function RecordPage({ records, actions }) {
  const [redirectToAddRecordPage, setRedirectToAddRecordPage] = useState(false);

  function handleDeleteRecord(record) {
    toast.success("Successfully deleted");
    actions.deleteRecord(record).catch((err) => {
      toast.error("Error while deleting: " + err, { autoClose: false });
    });
  }

  return (
    <section className="section-graph">
      {redirectToAddRecordPage && <Redirect to="/record" />}
      <button
        style={{ marginBottom: 20 }}
        className="btn btn-primary add-record"
        onClick={() => setRedirectToAddRecordPage(true)}
      >
        Add Record
      </button>

      <RecordList records={records} onDeleteClick={handleDeleteRecord} />
    </section>
  );
}

RecordPage.propTypes = {
  actions: PropTypes.object.isRequired,
  records: PropTypes.array.isRequired,
};

//when declaring mapStateToProps be specific. request only the data your component needs.
//ownProps parameter contains the props that is related to this component. its not required right now so we are remoeving.
//mapStateToProps(state, ownProps) takes two arguments.
const mapStateToProps = (state) => {
  return {
    records: state.records,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: {
      loadRecords: bindActionCreators(recordActions.loadRecords, dispatch),
      deleteRecord: bindActionCreators(recordActions.deleteRecord, dispatch),
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RecordPage);
