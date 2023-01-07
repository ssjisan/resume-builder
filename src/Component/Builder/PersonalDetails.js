import { Box, Grid, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

export default function PersonalDetails() {
  const [otherDetails, setOtherDetails] = useState(false);
  const handleMoreInfo = () => {
    setOtherDetails(!otherDetails);
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyCOntent: "flex-start",
        width: "100%",
        mt: 3,
      }}
    >
      <Typography
        sx={{ fontSize: "24px", fontWeight: 600, mb: 2 }}
        color="text.500"
      >
        Personal Details
      </Typography>
      <Grid container rowSpacing={3} columnSpacing={{ xs: 2, md: 4 }}>
        <Grid item xs={12} md={6}>
          <Typography
            sx={{ fontSize: "14px", mb: 1, fontWeight: 400 }}
            color="text.400"
          >
            Wanted Job Title
          </Typography>
          <TextField variant="filled" size="small" fullWidth placeholder="e.g UI/UX Designer" hiddenLabel/>
        </Grid>
        <Grid item xs={12} md={6}></Grid>
        <Grid item xs={12} md={6}>
          <Typography
            sx={{ fontSize: "14px", mb: 1, fontWeight: 400 }}
            color="text.400"
          >
            First Name
          </Typography>
          <TextField variant="filled" size="small" fullWidth hiddenLabel/>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography
            sx={{ fontSize: "14px", mb: 1, fontWeight: 400 }}
            color="text.400"
          >
            Last Name
          </Typography>
          <TextField variant="filled" size="small" fullWidth hiddenLabel/>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography
            sx={{ fontSize: "14px", mb: 1, fontWeight: 400 }}
            color="text.400"
          >
            Email
          </Typography>
          <TextField variant="filled" size="small" fullWidth hiddenLabel/>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography
            sx={{ fontSize: "14px", mb: 1, fontWeight: 400 }}
            color="text.400"
          >
            Phone
          </Typography>
          <TextField variant="filled" size="small" fullWidth hiddenLabel/>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography
            sx={{ fontSize: "14px", mb: 1, fontWeight: 400 }}
            color="text.400"
          >
            Country
          </Typography>
          <TextField variant="filled" size="small" fullWidth hiddenLabel/>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography
            sx={{ fontSize: "14px", mb: 1, fontWeight: 400 }}
            color="text.400"
          >
            City
          </Typography>
          <TextField variant="filled" size="small" fullWidth hiddenLabel/>
        </Grid>
        {otherDetails && (
          <>
            <Grid item xs={12} md={6}>
              <Typography
                sx={{ fontSize: "14px", mb: 1, fontWeight: 400 }}
                color="text.400"
              >
                Address
              </Typography>
              <TextField variant="filled" size="small" fullWidth hiddenLabel/>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography
                sx={{ fontSize: "14px", mb: 1, fontWeight: 400 }}
                color="text.400"
              >
                Postal Code
              </Typography>
              <TextField variant="filled" size="small" fullWidth hiddenLabel/>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography
                sx={{ fontSize: "14px", mb: 1, fontWeight: 400 }}
                color="text.400"
              >
                Nationality
              </Typography>
              <TextField variant="filled" size="small" fullWidth hiddenLabel/>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography
                sx={{ fontSize: "14px", mb: 1, fontWeight: 400 }}
                color="text.400"
              >
                Date Of Birth
              </Typography>
              <TextField variant="filled" size="small" fullWidth hiddenLabel/>
            </Grid>
          </>
        )}
        <Grid item md={12}>
          {otherDetails ? (
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "center",
                cursor: "pointer",
              }}
              onClick={handleMoreInfo}
            >
              <Typography
                color="primary"
                sx={{ fontSize: "14px", fontWeight: 600 }}
              >
                Hide additional details
              </Typography>
              <KeyboardArrowUpIcon />
            </Box>
          ) : (
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "center",
                cursor: "pointer",
              }}
              onClick={handleMoreInfo}
            >
              <Typography
                color="primary"
                sx={{ fontSize: "14px", fontWeight: 600 }}
              >
                Edit additional details
              </Typography>
              <KeyboardArrowDownIcon />
            </Box>
          )}
        </Grid>
      </Grid>
    </Box>
  );
}
