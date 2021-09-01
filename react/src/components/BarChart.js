import React from "react";
import { Bar } from "react-chartjs-2";

const BarChart = ({ chartInfo }) => {
  let chartData = {
    labels: chartInfo.labels,
    datasets: [
      {
        label: chartInfo.label,
        data: chartInfo.data,
        backgroundColor: chartInfo.backgroundColor,
        borderColor: chartInfo.borderColor,
        borderWidth: chartInfo.borderWidth,
      },
    ],
  };

  return (
    <>
      <div className="header">
        <h1 className="title">{chartInfo.title}</h1>
        <Bar data={chartData} options={chartInfo.options} />
      </div>
    </>
  );
};
export default BarChart;
