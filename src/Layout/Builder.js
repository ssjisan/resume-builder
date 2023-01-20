import { Box, Typography } from "@mui/material";
import React from "react";
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

export default function Builder() {
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
      <Languages />
      <Courses />
      <InternShip />
      <ExtraCurricularActivities />
      <Hobbies />
      <References />
      <AddSection />
    </Box>
  );
}
