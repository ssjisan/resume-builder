import { Box, Typography } from "@mui/material";
import React, { useContext } from "react";
import Progressbar from "../Component/Builder/Progressbar";
import WebsiteSocialLinks from "../Component/Builder/WebsiteSocialLinks";
import PersonalDetails from "../Component/Builder/PersonalDetails";
import ProfessionalSummary from "../Component/Builder/ProfessionalSummary";
import EmploymentHistory from "../Component/Builder/EmploymentHistory";
import Education from "../Component/Builder/Education";
import Languages from "../Component/Builder/Languages";
import Courses from "../Component/Builder/Courses";
import InternShip from "../Component/Builder/InternShip";
import ExtraCurricularActivities from "../Component/Builder/ExtraCurricularActivities";
import Hobbies from "../Component/Builder/Hobbies";
import References from "../Component/Builder/References";
import AddSection from "../Component/Builder/AddSection";
import { DataContext } from "../DataProcessing/DataProcessing";

export default function Builder() {
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
      <Education />
      <WebsiteSocialLinks />
      {order.map((name, index) => {
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
      })}
      <AddSection />
    </Box>
  );
}
