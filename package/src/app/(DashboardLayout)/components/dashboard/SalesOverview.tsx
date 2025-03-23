import React from "react";
import { useTheme } from "@mui/material/styles";
import DashboardCard from "@/app/(DashboardLayout)/components/shared/DashboardCard";
import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const SalesOverview: React.FC = () => {
  const theme = useTheme();
  const primary = theme.palette.primary.main;

  // Solar Energy Capacity Data
  const years = ["2019", "2020", "2021", "2022", "2023"];
  const capacities = [1675, 1680, 1725, 1724, 1856];

  // ApexCharts Options
  const optionscolumnchart: ApexOptions = {
    chart: {
      type: "bar",
      fontFamily: "'Plus Jakarta Sans', sans-serif;",
      foreColor: "#adb0bb",
      toolbar: { show: true },
      height: 370,
    },
    colors: [primary],
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "42%",
        borderRadius: 6,
      },
    },
    stroke: { show: true, width: 5, colors: ["transparent"] },
    dataLabels: { enabled: false },
    legend: { show: false },
    grid: { borderColor: "rgba(0,0,0,0.1)", strokeDashArray: 3 },
    yaxis: { tickAmount: 4, title: { text: "Capacity (MW)" } },
    xaxis: { categories: years, axisBorder: { show: false } },
    tooltip: { theme: "dark" },
  };

  const seriescolumnchart = [
    { name: "Solar Energy Capacity", data: capacities },
  ];

  return (
    <DashboardCard title="Egypt's Solar Energy Capacity Overview">
      <Chart
        options={optionscolumnchart}
        series={seriescolumnchart}
        type="bar"
        height={370}
        width="100%"
      />
    </DashboardCard>
  );
};

export default SalesOverview;
