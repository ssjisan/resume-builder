import { Box, Grid, useMediaQuery } from "@mui/material";
import React from "react";
import DataProcessing from "../DataProcessing/DataProcessing";
import Builder from "../Layout/Builder";
import InstantPreview from "../Layout/InstantPreview";

export default function Cooker() {
  const forBelow1200 = useMediaQuery("(max-width:1200px)");

  return (
    <Box>
      <DataProcessing>
        <Grid container>
          <Grid item xs={12} md={12} lg={6}>
            <Builder />
          </Grid>
          {!forBelow1200 && (
            <Grid item xs={12} md={12} lg={6}>
              <InstantPreview />
            </Grid>
          )}
        </Grid>
      </DataProcessing>
    </Box>
  );
}
