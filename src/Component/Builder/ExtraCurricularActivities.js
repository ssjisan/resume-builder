import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState, useContext } from "react";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { MobileDatePicker } from "@mui/x-date-pickers";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";
import "./Style/InputField.css";
import "./Style/Accordion.css";
import { DataContext } from "../../DataProcessing/DataProcessing";
export default function ExtraCurricularActivities() {
  const [functionName, setFunctionName] = useState("");
  const [employer, setEmployer] = useState("");
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const handleFunctionName = (e) => {
    setFunctionName(e.target.value);
  };
  const handleEmployer = (e) => {
    setEmployer(e.target.value);
  };
  const { handleRemoveAddSectionList } = useContext(DataContext);

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
          justifyContent: "flex-start",
          alignItems: "center",
          height: "40px",
          gap: 2,
          mb: 1,
        }}
        className="title-container"
      >
        <Typography
          sx={{ fontSize: "20px", fontWeight: 700, mb: 2 }}
          color="text.500"
        >
          Extra Curricular Activities
        </Typography>
        <Box
          onClick={() => handleRemoveAddSectionList("extracurricular")}
          sx={{
            width: "40px",
            height: "40px",
            display: "none",
            cursor: "pointer",
          }}
          className="remove-button"
        >
          <DeleteOutlineRoundedIcon size="small" sx={{ color: "#bec4d5" }} />
        </Box>
      </Box>
      <Accordion
        sx={{
          border: "1px solid #e7eaf4",
          borderRadius: 2,
          boxShadow: "none",
          mb: 2,
          "&:before": {
            display: "none",
          },
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          className="accordion-summary"
        >
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              {employer === "" && functionName === "" && (
                <Typography
                  sx={{ fontSize: "14px", fontWeight: 600 }}
                  color="text.500"
                  className="accordion-title"
                >
                  Not Specified
                </Typography>
              )}
              {employer === "" && functionName !== "" && (
                <Typography
                  sx={{ fontSize: "14px", fontWeight: 600 }}
                  color="text.500"
                  className="accordion-title"
                >
                  {functionName}
                </Typography>
              )}
              {employer !== "" && functionName === "" && (
                <Typography
                  sx={{ fontSize: "14px", fontWeight: 600 }}
                  color="text.500"
                  className="accordion-title"
                >
                  {employer}
                </Typography>
              )}
              {employer !== "" && functionName !== "" && (
                <Typography
                  sx={{ fontSize: "14px", fontWeight: 600 }}
                  color="text.500"
                >
                  {functionName} at {employer}
                </Typography>
              )}
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: "100%",
                }}
              >
                <Box size="large" className="accordion-remove-button">
                  <DeleteOutlineRoundedIcon className="remove-button" />
                </Box>
              </Box>
            </Box>
            <Typography
              sx={{ fontSize: "14px", fontWeight: 400 }}
              color="text.400"
            >
              Jan 01
            </Typography>
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: "100%",
              }}
            >
              <Box size="large" className="accordion-remove-button">
                <DeleteOutlineRoundedIcon className="remove-button" />
              </Box>
            </Box>
          </Box>
        </AccordionSummary>
        <AccordionDetails>
          <Box sx={{ p: 2 }}>
            <Grid container rowSpacing={3} columnSpacing={{ xs: 2, md: 4 }}>
              <Grid item xs={12} md={6}>
                <Typography
                  sx={{ fontSize: "14px", mb: 1, fontWeight: 400 }}
                  color="text.400"
                >
                  Job title
                </Typography>
                <TextField
                  variant="filled"
                  size="small"
                  name="Job Title"
                  value={functionName}
                  fullWidth
                  hiddenLabel
                  onChange={handleFunctionName}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography
                  sx={{ fontSize: "14px", mb: 1, fontWeight: 400 }}
                  color="text.400"
                >
                  Company Name
                </Typography>
                <TextField
                  variant="filled"
                  size="small"
                  name="Company Name"
                  value={employer}
                  fullWidth
                  hiddenLabel
                  onChange={handleEmployer}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography
                  sx={{ fontSize: "14px", mb: 1, fontWeight: 400 }}
                  color="text.400"
                >
                  Start & End Date
                </Typography>
                <Grid container spacing={2}>
                  <Grid item xs={12} lg={6}>
                    {" "}
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <MobileDatePicker
                        views={["year", "month"]}
                        value={startDate}
                        minDate={dayjs("2012-01-01")}
                        maxDate={dayjs("2023-06-01")}
                        onChange={(newValue) => {
                          setStartDate(newValue);
                        }}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            variant="filled"
                            size="small"
                            hiddenLabel
                            fullWidth
                          />
                        )}
                      />
                    </LocalizationProvider>
                  </Grid>
                  <Grid item xs={12} lg={6}>
                    {" "}
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <MobileDatePicker
                        views={["year", "month"]}
                        value={endDate}
                        minDate={dayjs("2012-01-01")}
                        maxDate={dayjs("2023-06-01")}
                        onChange={(newValue) => {
                          setEndDate(newValue);
                        }}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            variant="filled"
                            size="small"
                            hiddenLabel
                            fullWidth
                          />
                        )}
                      />
                    </LocalizationProvider>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography
                  sx={{ fontSize: "14px", mb: 1, fontWeight: 400 }}
                  color="text.400"
                >
                  Location
                </Typography>
                <TextField
                  variant="filled"
                  size="small"
                  fullWidth
                  hiddenLabel
                />
              </Grid>
              <Grid item lg={12}></Grid>
            </Grid>
          </Box>
        </AccordionDetails>
      </Accordion>
      <Button
        sx={{
          textTransform: "none",
          fontWeight: 600,
          mt: 2,
          display: "flex",
          justifyContent: "flex-start",
          color: "#1A91F0",
        }}
      >
        + Add one more extra curricular activity
      </Button>
    </Box>
  );
}
