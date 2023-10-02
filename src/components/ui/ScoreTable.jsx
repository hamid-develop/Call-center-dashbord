import { Box , Typography } from "@mui/material";

const ScoreTable = () => {
  return (
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
          <Typography>پاسخ داده نشده</Typography>
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
        <Typography>  درصد پاسخگویی</Typography>
        </Box>
      </Box>
      <Box sx={{ width: 125 }}>
        <Box
          sx={{
            height: 48,
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
           
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#19d11f",
            color: "white"
          }}
        >
          <Typography variant="h5">0</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default ScoreTable;
