import { Box, Grid, TextField, Typography } from "@mui/material";
import React from "react";

export default function PersonalDetails() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyCOntent: "flex-start",
      }}
    >
      <Typography sx={{fontSize:"24px", fontWeight:600}} color="text.500">Personal Details</Typography>
      <Grid container>
        <Grid item xs={12} md={6}>
          <TextField
            label="With normal TextField"
            id="filled-start-adornment"
            sx={{ m: 1, width: "25ch" }}
            variant="filled"
          />
        </Grid>
      </Grid>
    </Box>
  );
}
