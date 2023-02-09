import { Box, Typography } from "@mui/material";
import React, { useContext } from "react";
import Progressbar from "../Component/Builder/Progressbar";
// eslint-disable-next-line
import WebsiteSocialLinks from "../Component/Builder/WebsiteSocialLinks";
import PersonalDetails from "../Component/Builder/PersonalDetails";
// eslint-disable-next-line
import ProfessionalSummary from "../Component/Builder/ProfessionalSummary";
// eslint-disable-next-line
import EmploymentHistory from "../Component/Builder/EmploymentHistory";
// eslint-disable-next-line
import Education from "../Component/Builder/Education";
// eslint-disable-next-line
import Languages from "../Component/Builder/Languages";
// eslint-disable-next-line
import Courses from "../Component/Builder/Courses";
// eslint-disable-next-line
import InternShip from "../Component/Builder/InternShip";
// eslint-disable-next-line
import ExtraCurricularActivities from "../Component/Builder/ExtraCurricularActivities";
// eslint-disable-next-line
import Hobbies from "../Component/Builder/Hobbies";
// eslint-disable-next-line
import References from "../Component/Builder/References";
// eslint-disable-next-line
import AddSection from "../Component/Builder/AddSection";
import { DataContext } from "../DataProcessing/DataProcessing";

export default function Builder() {
  // eslint-disable-next-line
  const { order } = useContext(DataContext);
  return (
    <Box
      sx={{
        p: 6,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography sx={{ fontSize: "24px", fontWeight: 600 }} color="text.500">
        Resume
      </Typography>
      <Progressbar />
      <PersonalDetails />
      <ProfessionalSummary />
      <EmploymentHistory />
      {/* <Education /> */}
      {/* <WebsiteSocialLinks /> */}
      {/* {order.map((name, index) => {
        if (name === "reference") {
          return <References key={index} />;
        }
        if (name === "hobbies") {
          return <Hobbies key={index} />;
        }
        if (name === "internship") {
          return <InternShip key={index} />;
        }
        if (name === "languages") {
          return <Languages key={index} />;
        }
        if (name === "extracurricular") {
          return <ExtraCurricularActivities key={index} />;
        }
        if (name === "courses") {
          return <Courses key={index} />;
        } else {
          return null;
        }
      })} */}
      {/* <AddSection /> */}
    </Box>
  );
}
