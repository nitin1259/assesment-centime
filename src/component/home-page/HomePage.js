import React, { useEffect, useState } from "react";
import GraphicSankey from "../charts/Graphic-Sankey";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  loadRecords,
  getFilterRecords,
} from "./../../redux/actions/recordActions";
import RecordPage from "../record/RecordPage";
// import * as recordApi from "./../../api/recordsApi";
import "./HomePage.css";

function HomePage({ records, loadRecords, getFilterRecords }) {
  const [data, setData] = useState(null);
  const [fieldValue, setFeildValue] = useState("");
  const [operatorValue, setOperatorValue] = useState("equals");
  const [fieldKey, setFieldKey] = useState("amount");

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
    switch (e.target.name) {
      case "fieldValue":
        setFeildValue(e.target.value);
        break;
      case "fieldKey":
        setFieldKey(e.target.value);
        break;
      case "operatorValue":
        setOperatorValue(e.target.value);
        break;

      default:
        break;
    }
  };

  const handleClick = () => {
    console.log("handle click");
    // TODO
    getFilterRecords(fieldKey, fieldValue).catch((error) => {
      console.log("Error getting record " + error);
    });

    const somedata = records.map((rec) => {
      return [rec.from_party, rec.to_party, rec.amount];
    });
    setData(somedata);
  };

  return (
    <div>
      <div className="main-home__filter">
        <select
          value={fieldKey}
          onChange={handleChange}
          name="fieldKey"
          className="main-home__filter_key"
        >
          <option value="from ">From</option>
          <option value="to">To</option>
          <option value="amount">Amount</option>
        </select>
        <select
          value={operatorValue}
          name="operatorValue"
          onChange={handleChange}
          className="main-home__filter_operator"
        >
          <option value="greaterthan ">{">"}</option>
          <option value="lowerthan">{"<"}</option>
          <option value="equals">{"="}</option>
        </select>
        <input
          value={fieldValue}
          name="fieldValue"
          placeholder="value"
          className="main-home__filter_value"
          onChange={handleChange}
        />
        <button onClick={handleClick}>Filter Records</button>
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
  getFilterRecords: PropTypes.func.isRequired,
};

const mapStateToPorps = ({ records }) => {
  return {
    records,
  };
};

const mapDispatchToProps = {
  loadRecords: loadRecords,
  getFilterRecords: getFilterRecords,
};

export default connect(mapStateToPorps, mapDispatchToProps)(HomePage);
