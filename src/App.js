import { useState } from "react";

import { Typography } from "@mui/material";

import MainLayout from "./components/layouts/MainLayout";
import Sidebar from "./components/Sidebar";
import ContentContainer from "./components/ContentContainer";
import TabPanel from "./components/tabs/TabPanel";
import AnswerChart from "./components/ui/AnswerChart";
import TicketStatus from "./components/ui/TicketStatus";
import ActivityReport from "./components/ui/ActivityReport";
import CustomerScore from "./components/ui/CustomerScore"

function App() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <MainLayout>
      <Sidebar value={value} handleChange={handleChange} />
      <ContentContainer>
        <TabPanel value={value} index={0}>
          <Typography variant="h5" sx={{ textAlign: "center" }}>
            <AnswerChart />
          </Typography>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Typography variant="h5" sx={{ textAlign: "center" }}>
            <TicketStatus />
          </Typography>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Typography variant="h5" sx={{ textAlign: "center" }}>
             <ActivityReport />
          </Typography>
        </TabPanel>
        <TabPanel value={value} index={3}>
          <Typography variant="h5" sx={{ textAlign: "center" }}>
            <CustomerScore />
          </Typography>
        </TabPanel>
      </ContentContainer>
    </MainLayout>
  );
}

export default App;
