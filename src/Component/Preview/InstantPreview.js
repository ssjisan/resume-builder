import { Box, Button, Typography } from "@mui/material";
import React from "react";
import GridViewIcon from "@mui/icons-material/GridView";

export default function InstantPreview() {
  return (
    <Box
      sx={{
        backgroundColor: "#656E83",
        height: "100vh",
        position: "fixed",
        top: "0px",
        bottom: "0px",
        right: "0px",
        width: "50%",
      }}
    >
      <Typography sx={{ color: "#fff" }}>Instant Preview</Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Button sx={{ color: "#fff", textTransform: "none" }}>
          {" "}
          <GridViewIcon /> &nbsp; Select Category
        </Button>
        <Button
          variant="outlined"
          sx={{
            color: "#fff",
            textTransform: "none",
            border: "1px solid #fff",
          }}
        >
          Download Pdf
        </Button>
      </Box>
    </Box>
  );
}
