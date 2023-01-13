import { Box, Button, Typography } from "@mui/material";
import React from "react";
import GridViewIcon from "@mui/icons-material/GridView";
import MoreVertIcon from "@mui/icons-material/MoreVert";
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
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box sx={{ width: "585px", p:2}}>
        <Typography sx={{ color: "#fff",mb:2 }}>Instant Preview</Typography>
        <Box sx={{backgroundColor:"#fff", width:"100%",height:"800px"}}>s</Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            mt:2
          }}
        >
          <Button sx={{ color: "#fff", textTransform: "none" }}>
            {" "}
            <GridViewIcon /> &nbsp; Select Category
          </Button>
          <Box sx={{ display: "flex", gap: 2 }}>
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
            <Button
              variant="outlined"
              sx={{
                color: "#fff",
                textTransform: "none",
                border: "1px solid #fff",
                minWidth:"0px"
              }}
            >
              <MoreVertIcon />
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
