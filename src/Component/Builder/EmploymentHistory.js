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
import React, { useContext, useState } from "react";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { MobileDatePicker } from "@mui/x-date-pickers";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";
import "./Style/InputField.css";
import "./Style/Accordion.css";
import "./Style/EditorStyle.css";
import { Editor } from "@tinymce/tinymce-react";
import { DataContext } from "../../DataProcessing/DataProcessing";

export default function EmploymentHistory() {
  const {
    employmentAccordionexpanded,
    handleEmploymentAccordion,
    handleAddEmploymentHistory,
    handleEmploymentHistory,
    removeEmploymentHistory,
    employmentHistory,
    setEmploymentHistory,
    handleEmploymentDetails
  } = useContext(DataContext);

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
      {employmentHistory?.map((data, i) => {
        return (
          <Box>
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
              key={i}
              expanded={employmentAccordionexpanded === i}
              onChange={handleEmploymentAccordion(i)}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon className="accordion-icon" />}
                className="accordion-summary"
              >
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  {data?.companyName === "" && data.jobTitle === "" && (
                    <Typography
                      sx={{ fontSize: "14px", fontWeight: 600 }}
                      color="text.500"
                      className="accordion-title"
                    >
                      Not Specified
                    </Typography>
                  )}
                  {data?.companyName === "" && data.jobTitle !== "" && (
                    <Typography
                      sx={{ fontSize: "14px", fontWeight: 600 }}
                      color="text.500"
                      className="accordion-title"
                    >
                      {data.jobTitle}
                    </Typography>
                  )}
                  {data?.companyName !== "" && data.jobTitle === "" && (
                    <Typography
                      sx={{ fontSize: "14px", fontWeight: 600 }}
                      color="text.500"
                      className="accordion-title"
                    >
                      {data.companyName}
                    </Typography>
                  )}
                  {data?.companyName !== "" && data.jobTitle !== "" && (
                    <Typography
                      sx={{ fontSize: "14px", fontWeight: 600 }}
                      color="text.500"
                      className="accordion-title"
                    >
                      {data.jobTitle} at {data.companyName}
                    </Typography>
                  )}
                  <Box
                    className="accordion-remove-button"
                    onClick={() => removeEmploymentHistory(i)}
                  >
                    <DeleteOutlineRoundedIcon className="remove-button" />
                  </Box>
                </Box>
              </AccordionSummary>
              <AccordionDetails>
                <Box sx={{ p: 2 }}>
                  <Grid
                    container
                    rowSpacing={3}
                    columnSpacing={{ xs: 2, md: 4 }}
                  >
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
                        name="companyName"
                        value={data.companyName}
                        fullWidth
                        hiddenLabel
                        onChange={(e) => handleEmploymentHistory(e, i)}
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Typography
                        sx={{ fontSize: "14px", mb: 1, fontWeight: 400 }}
                        color="text.400"
                      >
                        Job Title
                      </Typography>
                      <TextField
                        variant="filled"
                        size="small"
                        name="jobTitle"
                        value={data.jobTitle}
                        fullWidth
                        hiddenLabel
                        onChange={(e) => handleEmploymentHistory(e, i)}
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
                          {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <MobileDatePicker
                              views={["year", "month"]}
                              value={data.startDate}
                              minDate={dayjs("1970-01-01")}
                              maxDate={dayjs()}
                              name="startDate"
                              onChange={(newValue) => {
                                setEmploymentHistory({
                                  ...employmentHistory,
                                  startDate:
                                    dayjs(newValue).format("YYYY-MM-DD"),
                                });
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
                          </LocalizationProvider> */}
                        </Grid>
                        <Grid item xs={12} lg={6}>
                          {" "}
                          {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <MobileDatePicker
                              views={["year", "month"]}
                              value={data.endDate}
                              minDate={dayjs("1970-01-01")}
                              maxDate={dayjs()}
                              onChange={(newValue) => {
                                setEmploymentHistory({
                                  ...employmentHistory,
                                  endDate: dayjs(newValue).format("YYYY-MM-DD"),
                                });
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
                          </LocalizationProvider> */}
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
                        name="location"
                        value={data.location}
                        fullWidth
                        hiddenLabel
                        onChange={(e) => handleEmploymentHistory(e, i)}
                      />
                    </Grid>
                    <Grid item lg={12}>
                    <Typography
                      sx={{ fontSize: "14px", mb: 1, fontWeight: 400 }}
                      color="text.400"
                    >
                      Description
                    </Typography>
                    <Editor
                      apiKey="q15jacj5azzopukv0hldcafwptxanxfvjsizqpn9y2jztsur"
                      value={data.jobDescription}
                      name="jobDescription"
                      onEditorChange={handleEmploymentDetails}
                      init={{
                        auto_focus: false,
                        directionality: "ltr",
                        placeholder:
                          "e.g. Passionate science teacher with 8+ years of experience and a track record of ...",
                        height: 250,
                        menubar: false,
                        statusbar: false,
                        background_colors: "red",
                        plugins: [
                          "advlist autolink lists link image charmap print preview anchor",
                          "searchreplace visualblocks code fullscreen",
                          "insertdatetime media table paste code help wordcount",
                          "underline",
                          "strikethrough",
                          "lists",
                        ],
                        toolbar:
                          "bold italic underline strikethrough | bullist numlist",
                        content_style:
                          "body { font-size:16px ; font-weight: 500 }",
                      }}
                    />
                  </Grid>
                  </Grid>
                </Box>
              </AccordionDetails>
            </Accordion>
          </Box>
        );
      })}
      <Button
        sx={{
          textTransform: "none",
          fontWeight: 600,
          mt: 2,
          display: "flex",
          justifyContent: "flex-start",
          color: "#1A91F0",
        }}
        onClick={handleAddEmploymentHistory}
      >
        + Add one more employment
      </Button>
    </Box>
  );
}
