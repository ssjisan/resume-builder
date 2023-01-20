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
import React, { useState } from "react";
import dayjs from "dayjs";
import { MobileDatePicker } from "@mui/x-date-pickers";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";
import "./Style/InputField.css";
import "./Style/Accordion.css";
export default function Education() {
  const [institute, setInstitute] = useState("");
  const [degree, setDegree] = useState("");
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const handleInstitute = (e) => {
    setInstitute(e.target.value);
  };
  const handleDegree = (e) => {
    setDegree(e.target.value);
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
        Education
      </Typography>
      <Typography sx={{ fontSize: "14px", mb: 2 }} color="text.400">
        Show your relevant experience (last 10 years). Use bullet points to note
        your achievements, if possible - use numbers/facts (Achieved X, measured
        by Y, by doing Z).
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
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          className="accordion-summary"
        >
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            {institute === "" && degree === "" && (
              <Typography
                sx={{ fontSize: "14px", fontWeight: 600 }}
                color="text.500"
                className="accordion-title"
              >
                Not Specified
              </Typography>
            )}
            {institute === "" && degree !== "" && (
              <Typography
                sx={{ fontSize: "14px", fontWeight: 600 }}
                color="text.500"
                className="accordion-title"
              >
                {degree}
              </Typography>
            )}
            {institute !== "" && degree === "" && (
              <Typography
                sx={{ fontSize: "14px", fontWeight: 600 }}
                color="text.500"
                className="accordion-title"
              >
                {institute}
              </Typography>
            )}
            {institute !== "" && degree !== "" && (
              <Typography
                sx={{ fontSize: "14px", fontWeight: 600 }}
                color="text.500"
              >
                {degree} at {institute}
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
        </AccordionSummary>
        <AccordionDetails>
          <Box sx={{ p: 2 }}>
            <Grid container rowSpacing={3} columnSpacing={{ xs: 2, md: 4 }}>
              <Grid item xs={12} md={6}>
                <Typography
                  sx={{ fontSize: "14px", mb: 1, fontWeight: 400 }}
                  color="text.400"
                >
                  Institute
                </Typography>
                <TextField
                  variant="filled"
                  size="small"
                  name="Institute"
                  value={institute}
                  fullWidth
                  hiddenLabel
                  onChange={handleInstitute}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography
                  sx={{ fontSize: "14px", mb: 1, fontWeight: 400 }}
                  color="text.400"
                >
                  Degree
                </Typography>
                <TextField
                  variant="filled"
                  size="small"
                  name="Degree"
                  value={degree}
                  fullWidth
                  hiddenLabel
                  onChange={handleDegree}
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
        + Add one more education
      </Button>
    </Box>
  );
}
