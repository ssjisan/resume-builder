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

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";
import "./Style/InputField.css";
import "./Style/Accordion.css";
export default function Courses() {
  const [institute, setInstitute] = useState("");
  const [course, setCourse] = useState("");
  const handleInstitute = (e) => {
    setInstitute(e.target.value);
  };
  const handleCourse = (e) => {
    setCourse(e.target.value);
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
      <Typography
        sx={{ fontSize: "20px", fontWeight: 700, mb: 2 }}
        color="text.500"
      >
        Courses
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
            {institute === "" && course === "" && (
              <Typography
                sx={{ fontSize: "14px", fontWeight: 600 }}
                color="text.500"
                className="accordion-title"
              >
                Not Specified
              </Typography>
            )}
            {institute === "" && course !== "" && (
              <Typography
                sx={{ fontSize: "14px", fontWeight: 600 }}
                color="text.500"
                className="accordion-title"
              >
                {course}
              </Typography>
            )}
            {institute !== "" && course === "" && (
              <Typography
                sx={{ fontSize: "14px", fontWeight: 600 }}
                color="text.500"
                className="accordion-title"
              >
                {institute}
              </Typography>
            )}
            {institute !== "" && course !== "" && (
              <Typography
                sx={{ fontSize: "14px", fontWeight: 600 }}
                color="text.500"
              >
                {course} at {institute}
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
          <Box>
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
                  Course
                </Typography>
                <TextField
                  variant="filled"
                  size="small"
                  name="Course"
                  value={course}
                  fullWidth
                  hiddenLabel
                  onChange={handleCourse}
                />
              </Grid>
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
        + Add one more course
      </Button>
    </Box>
  );
}
