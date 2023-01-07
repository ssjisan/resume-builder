import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import React from "react";

export default function WebsiteSocialLinks() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyCOntent: "flex-start",
        width: "100%",
        mt: 3,
        mb: 3,
      }}
    >
      <Typography
        sx={{ fontSize: "24px", fontWeight: 600, mb: 2 }}
        color="text.500"
      >
        Website & Social Links
      </Typography>
      <Typography sx={{ fontSize: "14px", mb: 2 }} color="text.400">
        You can add links to websites you want hiring managers to see! Perhaps
        It will be a link to your portfolio, LinkedIn profile, or personal
        website
      </Typography>
      <Grid container rowSpacing={3} columnSpacing={{ xs: 2, md: 4 }}>
        <Grid item xs={12} md={6}>
          <Typography
            sx={{ fontSize: "14px", mb: 1, fontWeight: 400 }}
            color="text.400"
          >
            Name
          </Typography>
          <TextField variant="filled" size="small" fullWidth hiddenLabel />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography
            sx={{ fontSize: "14px", mb: 1, fontWeight: 400 }}
            color="text.400"
          >
            Link
          </Typography>
          <TextField variant="filled" size="small" fullWidth hiddenLabel />
        </Grid>
      </Grid>
      <Button sx={{ textTransform: "none", fontWeight: 600, mt: 2 }}>
        + Add one more
      </Button>
    </Box>
  );
}
