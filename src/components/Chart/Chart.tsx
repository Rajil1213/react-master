import React from "react";

import "./Chart.css";
import ChartBar from "./ChartBar";

type dataPoint = {
  label: string;
  value: number;
};

type ChartProps = {
  dataPoints: dataPoint[];
};

const Chart = ({ dataPoints }: ChartProps) => {
  let maxValue = 0;

  for (const dataPoint of dataPoints) {
    if (dataPoint.value >= maxValue) {
      maxValue = dataPoint.value;
    }
  }
  return (
    <div className="chart">
      {dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={maxValue}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;

