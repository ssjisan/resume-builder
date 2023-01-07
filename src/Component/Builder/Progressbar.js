import { Box, LinearProgress, Typography } from "@mui/material";
import React, { useState } from "react";

export default function Progressbar() {
  // eslint-disable-next-line
  const [progress, setProgress] = useState(14);
  return (
    <Box sx={{ width: "100%", mt: 4, mb: 5 }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          mb: 2,
        }}
      >
        <Typography sx={{ fontSize: "14px", fontWeight: 500 }} color="text.400">
          <span style={{ fontWeight: 700, color: "#FB4458" }}>14%</span> Profile
          completeness
        </Typography>
        <Typography sx={{ fontSize: "14px", fontWeight: 500 }} color="text.400">
          <span style={{ fontWeight: 700, color: "#339D5D" }}>+10%</span> Add
          profile summary
        </Typography>
      </Box>
      <LinearProgress
        variant="determinate"
        value={progress}
        sx={{
          "& .MuiLinearProgress-bar1Determinate": {
            backgroundColor: "#FB4458",
          },
        }}
      />
    </Box>
  );
}
