import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import GraphicSankey from "../charts/Graphic-Sankey";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { loadRecords } from "./../../redux/actions/recordActions";
// import * as recordApi from "./../../api/recordsApi";

function HomePage({ records, loadRecords }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    // console.log(records);
    if (records.length === 0) {
      loadRecords().catch((error) => {
        console.log("Error getting record " + error);
      });
      console.log(records);
    }

    const somedata = records.map((rec) => {
      return [rec.from_party, rec.to_party, rec.amount];
    });
    setData(somedata);
  }, [records.length]);

  return (
    <>
      <Link to="/records">Records</Link>
      <br />
      <GraphicSankey data={data} />
    </>
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
