import React, { useEffect, useState } from "react";
import GraphicSankey from "../charts/Graphic-Sankey";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { loadRecords } from "./../../redux/actions/recordActions";
import RecordPage from "../record/RecordPage";
// import * as recordApi from "./../../api/recordsApi";

function HomePage({ records, loadRecords }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    if (records.length === 0) {
      loadRecords().catch((error) => {
        console.log("Error getting record " + error);
      });
    }

    const somedata = records.map((rec) => {
      return [rec.from_party, rec.to_party, rec.amount];
    });
    setData(somedata);
  }, [records.length]);

  return (
    <div>
      <GraphicSankey data={data} />
      <RecordPage records />
    </div>
  );
}

HomePage.propTypes = {
  records: PropTypes.array.isRequired,
  loadRecords: PropTypes.func.isRequired,
};

const mapStateToPorps = ({ records }) => {
  return {
    records,
  };
};

const mapDispatchToProps = {
  loadRecords: loadRecords,
};

export default connect(mapStateToPorps, mapDispatchToProps)(HomePage);
