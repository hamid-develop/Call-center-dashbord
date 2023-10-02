import { Box, Typography, Avatar, Tabs, Tab, Divider } from "@mui/material";
import {
  CopyrightRounded,
} from "@mui/icons-material";
import PieChartIcon from "@mui/icons-material/PieChart";
import BarChartIcon from "@mui/icons-material/BarChart";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import TableChartIcon from "@mui/icons-material/TableChart";
import { grey } from "@mui/material/colors";

const DrawerContent = ({ value, handleChange, setDrawerOpen }) => {
  const tabProps = (index) => {
    return {
      id: `sidebar-tab-${index}`,
      "aria-controls": `tabpanel-${index}`,
    };
  };
  return (
    <Box
      sx={{
        justifyContent: "center",
        textAlign: "center",
        mt: 2,
      }}
    >
      <Avatar
        src={require("../../assets/Avatar.jpg")}
        variant="rounded"
        sx={{
          height: 220,
          width: 200,
          margin: "0 auto",
          display: {
            xl: "block",
            lg: "block",
            md: "block",
            sm: "none",
            xs: "none",
          },
        }}
      >
        HR
      </Avatar>
      <Typography variant="h6" color="whitesmoke">
        حمیدرضا حسینعلی زاده
      </Typography>

      <Divider variant="middle" color={grey[900]} sx={{ mt: 2 }} />

      <Tabs
        orientation="vertical"
        variant="scrollable"
        scrollButton="auto"
        allowScrollButtonsMobile
        value={value}
        onChange={handleChange}
      >
        <Tab
          label="وضعیت پاسخگویی"
          icon={<PieChartIcon />}
          iconPosition="start"
          sx={{
            backgroundColor: "tomato",
            backgroundColor: grey[800],
            borderRadius: 2,
            my: 0.5,
            mx: 1,
            "&.MuiTab-root": {
              minHeight: 50,
            },
          }}
          onClick={() => setDrawerOpen(false)}
          {...tabProps(0)}
        />

        <Tab
          label="  وضعیت تیکت ثبت شده"
          icon={<BarChartIcon />}
          sx={{
            "&.MuiTab-root": {
              backgroundColor: "tomato",
              backgroundColor: grey[800],
              borderRadius: 2,
              my: 0.5,
              mx: 1,
              minHeight: 50,
            },
          }}
          iconPosition="start"
          onClick={() => setDrawerOpen(false)}
          {...tabProps(1)}
        />
        <Tab
          label="گزارش فعالیت "
          icon={<QueryStatsIcon />}
          iconPosition="start"
          sx={{
            "&.MuiTab-root": {
              backgroundColor: "tomato",
              backgroundColor: grey[800],
              borderRadius: 2,
              my: 0.5,
              mx: 1,
              minHeight: 50,
            },
          }}
          onClick={() => setDrawerOpen(false)}
          {...tabProps(2)}
        />
        <Tab
          label="پاسخ تماس و امتیازبندی"
          icon={<TableChartIcon />}
          iconPosition="start"
          sx={{
            "&.MuiTab-root": {
              backgroundColor: "tomato",
              backgroundColor: grey[800],
              borderRadius: 2,
              my: 0.5,
              mx: 1,
              minHeight: 50,
            },
          }}
          onClick={() => setDrawerOpen(false)}
          {...tabProps(3)}
        />
      </Tabs>

      <Divider variant="middle" color={grey[900]} sx={{ mt: 2 }} />

      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "end",
          alignItems: "center",
          height: 100,
        }}
      >
        <Typography variant="subtitle2" color="whitesmoke">
          داشبورد عملکرد واحد امداد مشتریان
          {/* <FavoriteRounded
                        sx={{
                            verticalAlign: "middle",
                            color: "tomato",
                            height: 20,
                        }}
                    /> */}
        </Typography>

        <Typography variant="caption" color="whitesmoke" sx={{ mt: 2 }}>
          V 1.0
          <CopyrightRounded sx={{ verticalAlign: "middle", height: 16 }} />
        </Typography>
      </Box>
    </Box>
  );
};

export default DrawerContent;
