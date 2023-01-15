import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
// eslint-disable-next-line
import dayjs from "dayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
export default function Education() {
  const [value, setValue] = useState();

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
        Education
      </Typography>
      <Typography sx={{ fontSize: "14px", mb: 2 }} color="text.400">
        A varied education on your resume sums up the value that your learnings
        and background will bring to job.
      </Typography>
      <Box sx={{ p: 2, border: "1px solid #e7eaf4" }}>
        <Grid container rowSpacing={3} columnSpacing={{ xs: 2, md: 4 }}>
          <Grid item xs={12} md={6}>
            <Typography
              sx={{ fontSize: "14px", mb: 1, fontWeight: 400 }}
              color="text.400"
            >
              School
            </Typography>
            <TextField variant="filled" size="small" fullWidth hiddenLabel />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography
              sx={{ fontSize: "14px", mb: 1, fontWeight: 400 }}
              color="text.400"
            >
              Degree
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
      </Box>
      <Button
        sx={{
          textTransform: "none",
          fontWeight: 600,
          mt: 2,
          display: "flex",
          justifyContent: "flex-start",
        }}
      >
        + Add Education
      </Button>
    </Box>
  );
}
