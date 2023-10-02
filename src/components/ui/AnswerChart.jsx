import { Box, Typography } from "@mui/material";
import Chart from "chart.js/auto";
import { Pie } from "react-chartjs-2";
import PieChartIcon from "@mui/icons-material/PieChart";
import ScoreTable from "./ScoreTable";

const AnswerChart = () => {
  const labels = ["عدم پاسخگویی", "پاسخ داده شده"];

  const data = {
    labels: labels,
    datasets: [
      {
        label: "تعداد",
        backgroundColor: ["#f04147", "#6491ed"],
        borderColor: "whitesmoke",
        data: [4, 100],
      },
    ],
  };

  return (
    <Box
      sx={{
        width: 800,
        height: 500,
        justifyContent: "center",
        marginLeft: 30,
        p: 2,
      }}
    >
      <Box
        row
        sx={{
          width: 500,
          height: 50,
          backgroundColor: "#ffd740",
          color: "#f57c00",
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 5,
          marginRight: 30,
        }}
      >
        <Typography variant="h6" color="red">
          وضعیت پاسخگویی
        </Typography>
        <PieChartIcon sx={{ color: "#f57c00" }} size={30} />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: 400,
          height: 400,
          mt:5,
          ml :10
        }}
      >
        <Pie data={data} />
        <ScoreTable />
      </Box>
    </Box>
  );
};

export default AnswerChart;
