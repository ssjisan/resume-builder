import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Grid,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { MobileDatePicker } from "@mui/x-date-pickers";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";
import "./Style/InputField.css";
import "./Style/Accordion.css";
export default function EmploymentHistory() {
  const [jobTitle, setJobTitle] = useState("");
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const handleInputChange = (e) => {
    setJobTitle(e.target.value);
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
      <Typography sx={{ fontSize: "20px", fontWeight: 700 }} color="text.500">
        Employment History
      </Typography>
      <Typography sx={{ fontSize: "14px", mb: 2 }} color="text.400">
        A varied education on your resume sums up the value that your learnings
        and background will bring to job.
      </Typography>
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
        className="accordion-Body"
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography
              sx={{ fontSize: "16px", fontWeight: 600 }}
              color="text.500"
              className="accordion-title"
            >
              {jobTitle ? jobTitle : "Not Specified"}
            </Typography>
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
                  className="accordion-remove"
                >
                  <IconButton size="large">
                    <DeleteOutlineRoundedIcon color="text.100" />
                  </IconButton>
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
                  value={jobTitle}
                  fullWidth
                  hiddenLabel
                  onChange={handleInputChange}
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
                  fullWidth
                  hiddenLabel
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
        + Add one more employment
      </Button>
    </Box>
  );
}
