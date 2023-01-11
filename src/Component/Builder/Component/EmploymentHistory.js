import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { MobileDatePicker } from "@mui/x-date-pickers";

export default function EmploymentHistory() {
  const [value, setValue] = useState();
  // eslint-disable-next-line
  const [description, setDescription] = useState("");
  // eslint-disable-next-line
  const handleChange = (e, editor) => {
    const data = editor.getData();
    setDescription(data);
  };
  console.log(description);

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
        sx={{ fontSize: "24px", fontWeight: 700, mb: 2 }}
        color="text.500"
      >
        Employment History
      </Typography>
      <Typography sx={{ fontSize: "14px", mb: 2 }} color="text.400">
        Show your relevant experience (last 10 years). Use bullet points to note
        your achievements, if possible - use numbers/facts (Achieved X, measured
        by Y, by doing Z).
      </Typography>
      <Box sx={{ p: 2, border: "1px solid #e7eaf4", borderRadius: "12px" }}>
        <Grid container rowSpacing={3} columnSpacing={{ xs: 2, md: 4 }}>
          <Grid item xs={12} md={6}>
            <Typography
              sx={{ fontSize: "14px", mb: 1, fontWeight: 400 }}
              color="text.400"
            >
              Job title
            </Typography>
            <TextField variant="filled" size="small" fullWidth hiddenLabel />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography
              sx={{ fontSize: "14px", mb: 1, fontWeight: 400 }}
              color="text.400"
            >
              Company Name
            </Typography>
            <TextField variant="filled" size="small" fullWidth hiddenLabel />
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
                    value={value}
                    minDate={dayjs("2012-01-01")}
                    maxDate={dayjs("2023-06-01")}
                    onChange={(newValue) => {
                      setValue(newValue);
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
                    value={value}
                    minDate={dayjs("2012-01-01")}
                    maxDate={dayjs("2023-06-01")}
                    onChange={(newValue) => {
                      setValue(newValue);
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
            <TextField variant="filled" size="small" fullWidth hiddenLabel />
          </Grid>
          <Grid item lg={12}></Grid>
        </Grid>
      </Box>
      <Button sx={{ textTransform: "none", fontWeight: 600, mt: 2 }}>
        + Add Employment History
      </Button>
    </Box>
  );
}
