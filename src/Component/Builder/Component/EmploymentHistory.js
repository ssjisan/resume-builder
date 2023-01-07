import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
// eslint-disable-next-line
import dayjs from "dayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
export default function EmploymentHistory() {
  const [value, setValue] = useState();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyCOntent: "flex-start",
        width: "100%",
        mt: 3,
        mb:3
      }}
    >
      <Typography
        sx={{ fontSize: "24px", fontWeight: 600, mb: 2 }}
        color="text.500"
      >
        Employment History
      </Typography>
      <Typography sx={{ fontSize: "14px", mb: 2 }} color="text.400">
        Show your relevant experience (last 10 years). Use bullet points to note
        your achievements, if possible - use numbers/facts (Achieved X, measured
        by Y, by doing Z).
      </Typography>
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
          <Grid container spcaing={10}>
            <Grid item xs={6} md={6}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  views={["year", "month"]}
                  value={value}
                  minDate={dayjs("2012-03-01")}
                  maxDate={dayjs("2023-06-01")}
                  onChange={(newValue) => {
                    setValue(newValue);
                  }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      helperText={null}
                      variant="filled"
                      size="small"
                      hiddenLabel
                    />
                  )}
                />
              </LocalizationProvider>
            </Grid>
            <Grid item xs={6} md={6}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  views={["year", "month"]}
                  value={value}
                  minDate={dayjs("2012-03-01")}
                  maxDate={dayjs("2023-06-01")}
                  onChange={(newValue) => {
                    setValue(newValue);
                  }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      helperText={null}
                      variant="filled"
                      size="small"
                      hiddenLabel
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
      </Grid>
      <Button sx={{ textTransform: "none", fontWeight: 600, mt: 2 }}>
        + Add Employment History
      </Button>
    </Box>
  );
}
