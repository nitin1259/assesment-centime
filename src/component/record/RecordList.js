import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function RecordList({ records, onDeleteClick }) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Title</th>
          <th>From</th>
          <th>To</th>
          <th>Amount</th>
          <th />
        </tr>
      </thead>
      <tbody>
        {records.map((record) => {
          return (
            <tr key={record.id}>
              <td>
                <Link to={"/record/" + record.id}>{record.title}</Link>
              </td>
              <td>{record.from_party}</td>
              <td>{record.to_party}</td>
              <td>{record.amount}</td>
              <td>
                <button
                  className="btn btn-outline-danger"
                  onClick={() => onDeleteClick(record)}
                >
                  Delete
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

RecordList.propTypes = {
  records: PropTypes.array.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
};

export default RecordList;
