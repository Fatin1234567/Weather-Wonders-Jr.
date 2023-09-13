import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

function BarChart({ chartData }) { //function for rendering bar chart
  return <Bar data={chartData} />;
}

export default BarChart;