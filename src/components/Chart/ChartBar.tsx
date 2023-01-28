import React from "react";

import "./ChartBar.css";

type ChartBarProps = {
  value: number;
  maxValue: number;
  label: string;
};

const ChartBar = ({ value, maxValue, label }: ChartBarProps) => {
  let barFillHeight = "0%";

  if (maxValue > 0) {
    barFillHeight = Math.round((100 * value) / maxValue).toString() + "%";
  }
  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          style={{
            height: barFillHeight,
          }}
        ></div>
      </div>
      <div className="chart-bar__label">{label}</div>
    </div>
  );
};

export default ChartBar;

