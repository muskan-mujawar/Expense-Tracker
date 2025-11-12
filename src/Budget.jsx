import React from "react";
import Chart from "react-apexcharts";

export default function Budget({ sharedData }) {
  // Group data by category and sum amounts
  const categoryTotals = sharedData.reduce((acc, item) => {
    acc[item.category] = (acc[item.category] || 0) + item.amount;
    return acc;
  }, {});

  const labels = Object.keys(categoryTotals);
  const series = Object.values(categoryTotals);

  const options = {
    labels,
    legend: { position: "bottom" },
    title: { text: "Category-wise Budget Distribution" },
  };

  return (
    <div className="m-2 p-4 border border-black rounded-2xl bg-white">
      <h4 className="text-center mb-3">Budget Overview</h4>
      <Chart options={options} series={series} type="donut" width="380" />
    </div>
  );
}
