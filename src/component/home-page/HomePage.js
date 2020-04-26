import React, { useEffect, useState } from "react";
import translate from "../../i18nProvider/translate";
import { Chart } from "react-google-charts";
import * as records from "./../../api/recordsApi";
import { Link } from "react-router-dom";

function HomePage() {
  const [data, setData] = useState(null);

  useEffect(() => {
    records
      .getRecords()
      .then((res) =>
        res.map((record) => {
          return [record.from_party, record.to_party, record.amount];
        })
      )
      .then((data) => setData(data));
  }, []);
  var colors = [
    "#a6cee3",
    "#b2df8a",
    "#fb9a99",
    "#fdbf6f",
    "#cab2d6",
    "#ffff99",
    "#1f78b4",
    "#33a02c",
  ];

  var options = {
    height: 400,
    sankey: {
      node: {
        colors: colors,
      },
      link: {
        colorMode: "gradient",
        colors: colors,
      },
    },
  };

  console.log(data);
  return (
    <>
      {translate("hello")}
      <Link to="/records">Records</Link>
      <div style={{ margin: "auto", maxWidth: 900 }}>
        <Chart
          width={600}
          height={"300px"}
          chartType="Sankey"
          loader={<div>Loading Chart</div>}
          options={options}
          columns={[
            {
              type: "string",
              label: "From",
            },
            {
              type: "string",
              label: "to",
            },
            {
              type: "number",
              label: "amount",
            },
          ]}
          rows={data}
          rootProps={{ "data-testid": "2" }}
        />
      </div>
    </>
  );
}

export default HomePage;
