import { Box, Typography, Divider } from "@mui/material";
import { FcStatistics } from "react-icons/fc";

const ActivityReport = () => {
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
          width: 550,
          height: 50,
          backgroundColor: "#ffd740",
          color: "#f57c00",
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 5,
          marginRight: 20,
        }}
      >
        <Typography variant="h6" color="red">
          {" "}
          گزارش فعالیت{" "}
        </Typography>
        <FcStatistics sx={{ color: "red" }} size={30} />
      </Box>

      <Box>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
          }}
        >
          <Box
            sx={{
              width: 160,
              height: 130,
              border: "1px solid gray",
              backgroundColor: "lightgrey",
              borderRadius: 5,
              fontSize: 13,
              color: "Blue",
              margin: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Typography variant="h7">تعداد پیامک ارسالی</Typography>
            <Box
              sx={{
                border: "1px solid #324563",
                width: 80,
                height: 40,
                borderRadius: 2,
                backgroundColor: "#324563",
                color: "lime",
                mt: 1,
                mb: 1,
              }}
            >
              <Typography variant="h6">هدف 0</Typography>
            </Box>
            <Box
              sx={{
                border: "1px solid #324563",
                width: 80,
                height: 40,
                borderRadius: 2,
                backgroundColor: "#324563",
                color: "lime",
              }}
            >
              <Typography variant="h6" sx={{ color: "white" }}>
                0
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              width: 160,
              height: 130,
              border: "1px solid gray",
              backgroundColor: "lightgrey",
              borderRadius: 5,
              fontSize: 13,
              color: "Blue",
              margin: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Typography variant="h7" sx={{ pt: -2 }}>
              مدت زمان حضور
            </Typography>
            <Box
              sx={{
                border: "1px solid #324563",
                width: 90,
                height: 60,
                borderRadius: 2,
                backgroundColor: "#324563",
                color: "lime",
                mt: 1,
                mb: 1,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography>00:00:00</Typography>
            </Box>
          </Box>
          <Box
            sx={{
              width: 160,
              height: 130,
              border: "1px solid gray",
              backgroundColor: "lightgrey",
              borderRadius: 5,
              fontSize: 13,
              color: "Blue",
              margin: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Typography variant="h7"> تعداد پاپ آپ </Typography>

            <Box
              sx={{
                border: "1px solid #324563",
                width: 80,
                height: 40,
                borderRadius: 2,
                backgroundColor: "#324563",
                color: "lime",
                mt: 1,
                mb: 1,
              }}
            >
              <Typography variant="h6">هدف 0</Typography>
            </Box>
            <Box
              sx={{
                border: "1px solid #324563",
                width: 80,
                height: 40,
                borderRadius: 2,
                backgroundColor: "#324563",
                color: "lime",
              }}
            >
              <Typography variant="h6" sx={{ color: "white" }}>
                0
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
          }}
        >
          <Box
            sx={{
              width: 160,
              height: 120,
              border: "1px solid gray",
              backgroundColor: "lightgrey",
              borderRadius: 5,
              fontSize: 13,
              color: "Blue",
              margin: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Typography variant="h7">میانگین زمان مکالمه</Typography>
            <Box
              sx={{
                border: "1px solid #324563",
                width: 80,
                height: 40,
                borderRadius: 2,
                backgroundColor: "#324563",
                color: "lime",
                mt: 1,
                mb: 1,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography variant="h7">هدف 3 دقیقه</Typography>
            </Box>
            <Box
              sx={{
                border: "1px solid #324563",
                width: 80,
                height: 40,
                borderRadius: 2,
                backgroundColor: "#324563",
                color: "lime",
              }}
            >
              <Typography variant="h6" sx={{ color: "white" }}>
                0
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              width: 160,
              height: 120,
              border: "1px solid gray",
              backgroundColor: "lightgrey",
              borderRadius: 5,
              fontSize: 13,
              color: "Blue",
              margin: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Typography variant="h7" sx={{ pt: -2 }}>
              تعداد تماس خروجی
            </Typography>
            <Box
              sx={{
                border: "1px solid #324563",
                width: 90,
                height: 60,
                borderRadius: 2,
                backgroundColor: "#324563",
                color: "whitesmoke",
                mt: 1,
                mb: 1,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography variant="h5">0</Typography>
            </Box>
          </Box>
          <Box
            sx={{
              width: 160,
              height: 120,
              border: "1px solid gray",
              backgroundColor: "lightgrey",
              borderRadius: 5,
              fontSize: 13,
              color: "Blue",
              margin: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Typography variant="h7">زنگ پیش از پاسخ</Typography>
            <Box
              sx={{
                border: "1px solid #324563",
                width: 80,
                height: 40,
                borderRadius: 2,
                backgroundColor: "#324563",
                color: "lime",
                mt: 1,
                mb: 1,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography variant="h7">هدف 2 ثانیه</Typography>
            </Box>
            <Box
              sx={{
                border: "1px solid #324563",
                width: 80,
                height: 40,
                borderRadius: 2,
                backgroundColor: "#324563",
                color: "lime",
              }}
            >
              <Typography variant="h6" sx={{ color: "white" }}>
                0
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
          }}
        >
          <Box
            sx={{
              width: 160,
              height: 120,
              border: "1px solid gray",
              backgroundColor: "lightgrey",
              borderRadius: 5,
              fontSize: 13,
              color: "Blue",
              margin: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Typography variant="h7">تعداد خروج از صف</Typography>
            <Box
              sx={{
                border: "1px solid #324563",
                width: 110,
                height: 40,
                borderRadius: 2,
                backgroundColor: "#324563",
                color: "lime",
                mt: 1,
                mb: 1,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography variant="h7">روزانه 5 نوبت</Typography>
              <Typography variant="h7">ماهانه 130 نوبت</Typography>
            </Box>
            <Box
              sx={{
                border: "1px solid #324563",
                width: 110,
                height: 40,
                borderRadius: 2,
                backgroundColor: "#324563",
                color: "lime",
              }}
            >
              <Typography variant="h6" sx={{ color: "white" }}>
                0
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              width: 160,
              height: 120,
              border: "1px solid gray",
              backgroundColor: "lightgrey",
              borderRadius: 5,
              fontSize: 13,
              color: "Blue",
              margin: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Typography variant="h7">اولین ورود / آخرین خروج</Typography>
            <Box
              sx={{
                border: "1px solid #324563",
                width: 110,
                height: 40,
                borderRadius: 2,
                backgroundColor: "#324563",
                color: "lime",
                mt: 1,
                mb: 1,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography variant="h5">ورود </Typography>
              <Divider
                color="whitesmoke"
                variant="middle"
                sx={{
                  mt: 2,
                }}
              />
              <Typography variant="h5" sx={{ color: "white" }}>
                {" "}
                0{" "}
              </Typography>
            </Box>
            <Box
              sx={{
                border: "1px solid #324563",
                width: 110,
                height: 40,
                borderRadius: 2,
                backgroundColor: "#324563",
                color: "lime",
                mt: 1,
                mb: 1,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography variant="h5">خروج </Typography>
              <Divider
                color="whitesmoke"
                variant="middle"
                sx={{
                  mt: 2,
                }}
              />
              <Typography variant="h5" sx={{ color: "white" }}>
                {" "}
                0{" "}
              </Typography>
            </Box>
          </Box>

          <Box
            sx={{
              width: 160,
              height: 120,
              border: "1px solid gray",
              backgroundColor: "lightgrey",
              borderRadius: 5,
              fontSize: 13,
              color: "Blue",
              margin: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Typography variant="h7">اولین ورود / آخرین خروج</Typography>
            <Box
              sx={{
                border: "1px solid #324563",
                width: 110,
                height: 40,
                borderRadius: 2,
                backgroundColor: "#324563",
                color: "lime",
                mt: 1,
                mb: 1,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography variant="h9">زمان تعیین شده</Typography>
              <Divider
                color="whitesmoke"
                variant="middle"
                sx={{
                  mt: 2,
                }}
              />
              <Typography variant="h9" sx={{ color: "white" }}>
                30 دقیقه
              </Typography>
            </Box>
            <Box
              sx={{
                border: "1px solid #324563",
                width: 110,
                height: 40,
                borderRadius: 2,
                backgroundColor: "#324563",
                color: "lime",
                mt: 1,
                mb: 1,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography variant="h9">مدت زمان صرف شده</Typography>
              <Divider
                color="whitesmoke"
                variant="middle"
                sx={{
                  mt: 2,
                }}
              />
              <Typography variant="h7" sx={{ color: "white" }}>
                00:00
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box></Box>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          ml: 6,
        }}
      >
        <Box
          sx={{
            width: 210,
            height: 120,
            border: "1px solid gray",
            backgroundColor: "lightgrey",
            borderRadius: 5,
            fontSize: 13,
            color: "Blue",
            margin: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Typography variant="h6" sx={{ pt: -2 }}>
            موضوع نداشتن اطلاعات
          </Typography>
          <Box
            sx={{
              border: "1px solid #324563",
              width: 160,
              height: 40,
              borderRadius: 2,
              backgroundColor: "#324563",
              color: "whitesmoke",
              mt: 1,
              mb: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography variant="h5" sx={{ color: "yellow" }}>
              0
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            width: 210,
            height: 120,
            border: "1px solid gray",
            backgroundColor: "lightgrey",
            borderRadius: 5,
            fontSize: 13,
            color: "Blue",
            margin: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Typography variant="h6" sx={{ pt: -2 }}>
            موضوع تماس متفرقه{" "}
          </Typography>
          <Box
            sx={{
              border: "1px solid #324563",
              width: 160,
              height: 40,
              borderRadius: 2,
              backgroundColor: "#324563",
              color: "whitesmoke",
              mt: 1,
              mb: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography variant="h5" sx={{ color: "yellow" }}>
              0
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ActivityReport;
