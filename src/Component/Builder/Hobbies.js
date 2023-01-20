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
import React, { useState } from "react";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";
import "./Style/InputField.css";
import "./Style/Accordion.css";
export default function Hobbies() {
  const [hobbies, setHobbies] = useState("");
  const handleHobbies = (e) => {
    setHobbies(e.target.value);
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
        Hobbies
      </Typography>
      <Grid container>
        <Grid item xs={12} md={12}>
          <Typography
            sx={{ fontSize: "14px", mb: 1, fontWeight: 400 }}
            color="text.400"
          >
            What do you like?
          </Typography>
          <TextField
            variant="filled"
            size="small"
            name="Language"
            value={hobbies}
            placeholder="e.g skiing, skydiving, painting"
            fullWidth
            hiddenLabel
            multiline
            rows={4}
            onChange={handleHobbies}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
