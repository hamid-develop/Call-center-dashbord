import { Box, Typography } from "@mui/material";
import { FaUserCheck } from "react-icons/fa";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";

const TicketStatus = () => {
  const data = {
    name :   "وضعیت کلی",
    labels: ["تعداد کل تماس", "پاسخ داده شده", "تیکت ثبت شده"],
    backgroundColor: "black",
    datasets: [
      {
        label: 'نسبت به کل تماس ها',
        barPercentage: 0.5,
        barThickness: 50,
        maxBarThickness: 100,
        minBarLength: 20,
        borderColor: ["#6491ed", "#19d11f", "#f04147"],
        backgroundColor: ["#6491ed", "#19d11f", "#f04147"],
        borderWidth: 0.5,
        data: [130, 125, 123,150],
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
          {" "}
          وضعیت تیکت ثبت شده{" "}
        </Typography>
        <FaUserCheck sx={{ color: "#f57c00" }} size={30} />
        </Box>
        <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: 400,
          height: 400,
          mt:5,
          ml:10
        }}
      >
        <Bar data={data} width={400} height={400} style={{marginRight:10, marginTop: 7}} />
        <Box
      sx={{
        border: "1px solid black",
        width: 250,
        height: 150,
        mx: 5,
        mt: 3,
        display: "flex",
        borderRadius: 1,
      }}
    >
      <Box sx={{ width: 125 }}>
        <Box
          sx={{
            height: 50,
            border: "1px dashed gray",
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography variant= "subtitle1">پاسخ داده شده</Typography>
        </Box>
        <Box
          sx={{
            height: 50,
            border: "1px dashed gray",
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography variant= "subtitle1">تعداد تیکت</Typography>
        </Box>
        <Box
          sx={{
            height: 45,
            border: "1px dashed gray",
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography variant= "subtitle1">درصد تیکت </Typography>
        </Box>
      </Box>
      <Box sx={{ width: 125 }}>
        <Box
          sx={{
            height: 47,
            border: "1px dashed gray",
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          0
        </Box>
        <Box
          sx={{
            height: 50,
            border: "1px dashed gray",
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            
          }}
        >
          0
        </Box>
        <Box
          sx={{
            height: 50,
            border: "1px dashed gray",
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#f04147",
          }}
        >
          <Typography variant="h5" sx={{color: "whitesmoke"}}>0</Typography>
        </Box>
      </Box>
    </Box>

      </Box>
            </Box>
  );
};

export default TicketStatus;
