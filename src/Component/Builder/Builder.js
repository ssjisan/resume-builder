import { Box, Typography } from "@mui/material";
import React from "react";
import PersonalDetails from "./PersonalDetails";
import Progressbar from "./Progressbar";

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
    </Box>
  );
}
