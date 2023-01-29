import {
  Box,
  Button,
  Grid,
  IconButton,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useState, useContext } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import HelpOutlineRoundedIcon from "@mui/icons-material/HelpOutlineRounded";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import { DataContext } from "../../DataProcessing/DataProcessing";

export default function PersonalDetails() {
  const {
    handleEdit,
    handleHover,
    hoveredTitle,
    setHover,
  } = useContext(DataContext);
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
        onMouseEnter={() => handleHover("Personal Details Title")}
        onMouseLeave={() => setHover(false)}
      >
        <Typography sx={{ fontSize: "20px", fontWeight: 700 }} color="text.500">
          Personal Details
        </Typography>
        <IconButton
          onClick={handleEdit}
          sx={{
            display:
              hoveredTitle === "Personal Details Title" ? "block" : "none",
            width: "40px",
            height: "40px",
          }}
        >
          <DriveFileRenameOutlineIcon size="small" sx={{ color: "#bec4d5" }} />
        </IconButton>
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
          <TextField variant="filled" size="small" fullWidth hiddenLabel />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography
            sx={{ fontSize: "14px", mb: 1, fontWeight: 400 }}
            color="text.400"
          >
            Last Name
          </Typography>
          <TextField variant="filled" size="small" fullWidth hiddenLabel />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography
            sx={{ fontSize: "14px", mb: 1, fontWeight: 400 }}
            color="text.400"
          >
            Email
          </Typography>
          <TextField variant="filled" size="small" fullWidth hiddenLabel />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography
            sx={{ fontSize: "14px", mb: 1, fontWeight: 400 }}
            color="text.400"
          >
            Phone
          </Typography>
          <TextField variant="filled" size="small" fullWidth hiddenLabel />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography
            sx={{ fontSize: "14px", mb: 1, fontWeight: 400 }}
            color="text.400"
          >
            Country
          </Typography>
          <TextField variant="filled" size="small" fullWidth hiddenLabel />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography
            sx={{ fontSize: "14px", mb: 1, fontWeight: 400 }}
            color="text.400"
          >
            City
          </Typography>
          <TextField variant="filled" size="small" fullWidth hiddenLabel />
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
              <TextField variant="filled" size="small" fullWidth hiddenLabel />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography
                sx={{ fontSize: "14px", mb: 1, fontWeight: 400 }}
                color="text.400"
              >
                Postal Code
              </Typography>
              <TextField variant="filled" size="small" fullWidth hiddenLabel />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography
                sx={{ fontSize: "14px", mb: 1, fontWeight: 400 }}
                color="text.400"
              >
                Nationality
              </Typography>
              <TextField variant="filled" size="small" fullWidth hiddenLabel />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography
                sx={{ fontSize: "14px", mb: 1, fontWeight: 400 }}
                color="text.400"
              >
                Date Of Birth
              </Typography>
              <TextField variant="filled" size="small" fullWidth hiddenLabel />
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
