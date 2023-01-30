import { Box, Grid, TextField, Typography } from "@mui/material";
import React, { useState, useContext } from "react";
import "./Style/InputField.css";
import "./Style/Accordion.css";
import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";
import { DataContext } from "../../DataProcessing/DataProcessing";

export default function Hobbies() {
  const [hobbies, setHobbies] = useState("");
  const handleHobbies = (e) => {
    setHobbies(e.target.value);
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
          Hobbies
        </Typography>
        <Box
          onClick={() => handleRemoveAddSectionList("hobbies")}
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
