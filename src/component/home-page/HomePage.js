import React, { useEffect, useState } from "react";
import GraphicSankey from "../charts/Graphic-Sankey";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { loadRecords } from "./../../redux/actions/recordActions";
import RecordPage from "../record/RecordPage";
// import * as recordApi from "./../../api/recordsApi";
import "./HomePage.css";

function HomePage({ records, loadRecords }) {
  const [data, setData] = useState(null);
  const [fieldValue, setFeildValue] = useState("");

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

  const handleChange = (e) => {
    setFeildValue(e.target.value);
  };

  return (
    <div>
      <div className="main-home__filter">
        <select value="Amount" className="main-home__filter_key">
          <option value="From ">From</option>
          <option value="To">To</option>
          <option value="Amount">Amount</option>
        </select>
        <select value="equals" className="main-home__filter_operator">
          <option value="greaterthan ">{">"}</option>
          <option value="lowerthan">{"<"}</option>
          <option value="equals">{"="}</option>
        </select>
        <input
          value={fieldValue}
          placeholder="value"
          className="main-home__filter_value"
          onChange={handleChange}
        />
      </div>
      <main className="main-home">
        <GraphicSankey data={data} />
        <RecordPage records />
      </main>
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
