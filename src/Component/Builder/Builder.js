import { Box, Typography } from "@mui/material";
import React from "react";
// eslint-disable-next-line
import Education from "./Component/Education";
// eslint-disable-next-line
import EmploymentHistory from "./Component/EmploymentHistory";
// eslint-disable-next-line
import PersonalDetails from "./Component/PersonalDetails";
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
      {/* <EmploymentHistory /> */}
      {/* <Education /> */}
      <WebsiteSocialLinks />
    </Box>
  );
}
