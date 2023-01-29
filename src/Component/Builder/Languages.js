import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState, useContext } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";
import "./Style/InputField.css";
import "./Style/Accordion.css";
import { DataContext } from "../../DataProcessing/DataProcessing";

export default function Languages() {
  const [language, setLanguage] = useState("");
  const handleLanguage = (e) => {
    setLanguage(e.target.value);
  };
  const [age, setAge] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
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
          Language
        </Typography>
        <Box
          onClick={() => handleRemoveAddSectionList("languages")}
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
            <Typography
              sx={{ fontSize: "14px", fontWeight: 600 }}
              color="text.500"
              className="accordion-title"
            >
              {language ? language : "Not Specified"}
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
          <Box>
            <Grid container rowSpacing={3} columnSpacing={{ xs: 2, md: 4 }}>
              <Grid item xs={12} md={6}>
                <Typography
                  sx={{ fontSize: "14px", mb: 1, fontWeight: 400 }}
                  color="text.400"
                >
                  Language
                </Typography>
                <TextField
                  variant="filled"
                  size="small"
                  name="Language"
                  value={language}
                  fullWidth
                  hiddenLabel
                  onChange={handleLanguage}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography
                  sx={{ fontSize: "14px", mb: 1, fontWeight: 400 }}
                  color="text.400"
                >
                  Degree
                </Typography>
                <FormControl
                  variant="filled"
                  size="small"
                  fullWidth
                  hiddenLabel
                >
                  {age === "" && (
                    <InputLabel sx={{ fontSize: "14px" }}>Level</InputLabel>
                  )}
                  <Select
                    value={age}
                    onChange={handleChange}
                    renderValue={age !== "" ? undefined : () => <h6>Answer</h6>}
                  >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
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
        + Add one more language
      </Button>
    </Box>
  );
}
