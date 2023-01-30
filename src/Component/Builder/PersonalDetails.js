import {
  Box,
  Button,
  Grid,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useState, useContext } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import HelpOutlineRoundedIcon from "@mui/icons-material/HelpOutlineRounded";
import { DataContext } from "../../DataProcessing/DataProcessing";
// eslint-disable-next-line
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"; // eslint-disable-next-line
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"; // eslint-disable-next-line
import { MobileDatePicker } from "@mui/x-date-pickers"; // eslint-disable-next-line
import dayjs from "dayjs";

export default function PersonalDetails() {
  const [otherDetails, setOtherDetails] = useState(false);
  const handleMoreInfo = () => {
    setOtherDetails(!otherDetails);
  };
  const { personaleDetails, handlePersonalDetails } = useContext(DataContext);
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
      <Box
        sx={{
          display: "flex",
          gap: 2,
          justifyContent: "flex-start",
          alignItems: "center",
          mb: 2,
          height: "42px",
          width: "100%",
        }}
      >
        <Typography sx={{ fontSize: "20px", fontWeight: 700 }} color="text.500">
          Personal Details
        </Typography>
      </Box>
      <Grid container rowSpacing={3} columnSpacing={{ xs: 2, md: 4 }}>
        <Grid item xs={12} md={6}>
          <Box sx={{ display: "flex", alignItems: "baseline" }}>
            <Typography
              sx={{ fontSize: "14px", mb: 1, fontWeight: 400, mr: 1 }}
              color="text.400"
            >
              Wanted Job Title
            </Typography>
            <Tooltip
              title="Add a title like ‘Senior Marketer’ or ‘Sales Executive’ that quickly describes your overall experience or the type of role you're applying to"
              placement="top"
              arrow
            >
              <HelpOutlineRoundedIcon
                sx={{ fontSize: "16px", color: "#1a91f0" }}
              />
            </Tooltip>
          </Box>
          <TextField
            variant="filled"
            size="small"
            fullWidth
            placeholder="e.g UI/UX Designer"
            name="jobTitle"
            onChange={handlePersonalDetails}
            value={personaleDetails.jobTitle}
            hiddenLabel
          />
        </Grid>
        <Grid item xs={12} md={6}></Grid>
        <Grid item xs={12} md={6}>
          <Typography
            sx={{ fontSize: "14px", mb: 1, fontWeight: 400 }}
            color="text.400"
          >
            First Name
          </Typography>
          <TextField
            variant="filled"
            size="small"
            value={personaleDetails.firstName}
            name="firstName"
            onChange={handlePersonalDetails}
            fullWidth
            hiddenLabel
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography
            sx={{ fontSize: "14px", mb: 1, fontWeight: 400 }}
            color="text.400"
          >
            Last Name
          </Typography>
          <TextField
            variant="filled"
            size="small"
            value={personaleDetails.lastName}
            name="lastName"
            onChange={handlePersonalDetails}
            fullWidth
            hiddenLabel
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography
            sx={{ fontSize: "14px", mb: 1, fontWeight: 400 }}
            color="text.400"
          >
            Email
          </Typography>
          <TextField
            variant="filled"
            size="small"
            value={personaleDetails.email}
            name="email"
            onChange={handlePersonalDetails}
            fullWidth
            hiddenLabel
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography
            sx={{ fontSize: "14px", mb: 1, fontWeight: 400 }}
            color="text.400"
          >
            Phone
          </Typography>
          <TextField
            variant="filled"
            size="small"
            value={personaleDetails.phone}
            name="phone"
            onChange={handlePersonalDetails}
            fullWidth
            hiddenLabel
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography
            sx={{ fontSize: "14px", mb: 1, fontWeight: 400 }}
            color="text.400"
          >
            Country
          </Typography>
          <TextField
            variant="filled"
            size="small"
            value={personaleDetails.country}
            name="country"
            onChange={handlePersonalDetails}
            fullWidth
            hiddenLabel
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography
            sx={{ fontSize: "14px", mb: 1, fontWeight: 400 }}
            color="text.400"
          >
            City
          </Typography>
          <TextField
            variant="filled"
            size="small"
            value={personaleDetails.city}
            name="city"
            onChange={handlePersonalDetails}
            fullWidth
            hiddenLabel
          />
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
              <TextField
                variant="filled"
                size="small"
                value={personaleDetails.address}
                name="address"
                onChange={handlePersonalDetails}
                fullWidth
                hiddenLabel
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography
                sx={{ fontSize: "14px", mb: 1, fontWeight: 400 }}
                color="text.400"
              >
                Postal Code
              </Typography>
              <TextField
                variant="filled"
                size="small"
                value={personaleDetails.postalCode}
                name="postalCode"
                onChange={handlePersonalDetails}
                fullWidth
                hiddenLabel
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography
                sx={{ fontSize: "14px", mb: 1, fontWeight: 400 }}
                color="text.400"
              >
                Nationality
              </Typography>
              <TextField
                variant="filled"
                size="small"
                value={personaleDetails.nationality}
                name="nationality"
                onChange={handlePersonalDetails}
                fullWidth
                hiddenLabel
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography
                sx={{ fontSize: "14px", mb: 1, fontWeight: 400 }}
                color="text.400"
              >
                Date Of Birth
              </Typography>
              <TextField
                variant="filled"
                size="small"
                value={personaleDetails.dateOfBirth}
                name="dateOfBirth"
                onChange={handlePersonalDetails}
                fullWidth
                hiddenLabel
              />
            </Grid>
          </>
        )}
        <Grid item md={12}>
          {otherDetails ? (
            <Button
              sx={{
                textTransform: "none",
                fontWeight: 600,
                mt: 2,
                display: "flex",
                justifyContent: "flex-start",
                color: "#1A91F0",
              }}
              onClick={handleMoreInfo}
            >
              Hide additional details <KeyboardArrowUpIcon />
            </Button>
          ) : (
            <Button
              sx={{
                textTransform: "none",
                fontWeight: 600,
                mt: 2,
                display: "flex",
                justifyContent: "flex-start",
                color: "#1A91F0",
              }}
              onClick={handleMoreInfo}
            >
              Edit additional details <KeyboardArrowDownIcon />
            </Button>
          )}
        </Grid>
      </Grid>
    </Box>
  );
}
