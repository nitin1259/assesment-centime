import React from "react";
import Chart from "react-google-charts";

function GraphicSankey({ data }) {
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
  return (
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
        rootProps={{ "data-testid": "1" }}
      />
    </div>
  );
}

export default GraphicSankey;
