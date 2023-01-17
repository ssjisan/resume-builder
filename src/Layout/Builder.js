import { Box, Typography } from "@mui/material";
import React from "react";
import Progressbar from "../Component/Builder/Progressbar";
import WebsiteSocialLinks from "../Component/Builder/WebsiteSocialLinks";
// import PersonalDetails from "../Component/Builder/PersonalDetails";

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
