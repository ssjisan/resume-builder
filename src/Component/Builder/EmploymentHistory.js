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
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { MobileDatePicker } from "@mui/x-date-pickers";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";
import "./Style/InputField.css";
import "./Style/Accordion.css";
export default function EmploymentHistory() {
  const [jobTitle, setJobTitle] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const handleJobTitle = (e) => {
    setJobTitle(e.target.value);
  };
  const handleCompanyName = (e) => {
    setCompanyName(e.target.value);
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
      <Box className="accordion-container">
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            className="accordion-summary"
          >
            <Typography
              sx={{ fontSize: "14px", fontWeight: 400 }}
              color="text.400"className="accordion-title"
            >
              Accordion Header
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              sx={{ fontSize: "14px", fontWeight: 400 }}
              color="text.400"
            >
              Accordion Body
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Box className="accordion-remove-button" sx={{ml:1}}>
          <DeleteOutlineRoundedIcon className="remove-button"/>
        </Box>
      </Box>
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
