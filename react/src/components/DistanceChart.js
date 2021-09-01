import React, { useContext } from "react";

import DataContext from "../contexts/DataContext";
import BarChart from "./BarChart";

const DistanceChart = () => {
  const [data] = useContext(DataContext);

  return data ? (
    <BarChart
      chartInfo={{
        title: "Distance Traveled per Month",
        label: "Distance Traveled in Miles",
        labels: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
        data: Object.values(data.distancePerMonth),
        backgroundColor: [
          "rgba(255, 0, 0, 0.2)",
          "rgba(255, 125, 0, 0.2)",
          "rgba(255, 255, 0, 0.2)",
          "rgba(125, 255, 0, 0.2)",
          "rgba(0, 255, 0, 0.2)",
          "rgba(0, 255, 125, 0.2)",
          "rgba(0, 255, 255, 0.2)",
          "rgba(0, 125, 255, 0.2)",
          "rgba(0, 0, 255, 0.2)",
          "rgba(125, 0, 255, 0.2)",
          "rgba(255, 0, 255, 0.2)",
          "rgba(255, 0, 125, 0.2)",
        ],
        borderColor: [
          "rgba(255, 0, 0, 0.2)",
          "rgba(255, 125, 0, 0.2)",
          "rgba(255, 255, 0, 0.2)",
          "rgba(125, 255, 0, 0.2)",
          "rgba(0, 255, 0, 0.2)",
          "rgba(0, 255, 125, 0.2)",
          "rgba(0, 255, 255, 0.2)",
          "rgba(0, 125, 255, 0.2)",
          "rgba(0, 0, 255, 0.2)",
          "rgba(125, 0, 255, 0.2)",
          "rgba(255, 0, 255, 0.2)",
          "rgba(255, 0, 125, 0.2)",
        ],
        borderWidth: 1,
        options: {
          responsive: true,
          tooltips: {
            mode: "index",
          },
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
        },
      }}
    />
  ) : null;
};

export default DistanceChart;
