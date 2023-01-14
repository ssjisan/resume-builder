import { Box, Typography } from "@mui/material";
import React from "react";
import Education from "./Component/Education";
import EmploymentHistory from "./Component/EmploymentHistory";
import PersonalDetails from "./Component/PersonalDetails";
import ProfessionalSummary from "./Component/ProfessionalSummary";
import Progressbar from "./Component/Progressbar";
import WebsiteSocialLinks from "./Component/WebsiteSocialLinks";

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
      {/* <PersonalDetails /> */}
      {/* <ProfessionalSummary /> */}
      {/* <EmploymentHistory /> */}
      {/* <Education /> */}
      <WebsiteSocialLinks />
    </Box>
  );
}
