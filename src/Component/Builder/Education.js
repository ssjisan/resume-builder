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
import React, { useContext } from "react";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { MobileDatePicker } from "@mui/x-date-pickers";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";
import { Editor } from "@tinymce/tinymce-react";
import { DataContext } from "../../DataProcessing/DataProcessing";
import "./Style/InputField.css";
import "./Style/Accordion.css";
import "./Style/EditorStyle.css";

export default function Education() {
  const {
    educationAccordion,
    handleEducationAccordion,
    handleAddEducation,
    handleEducation,
    removeEducation,
    education,
    handleEducationDetails,
    educationStartDate,
    educationEndDate,
  } = useContext(DataContext);

  // const MyActionBar = ({ onSetToday, onChange, onAccept, onCancel }) => {
  //   const [checked, setChecked] = React.useState(false);

  //   const handleCheckboxClick = () => {
  //     setChecked(!checked);
  //     if (!checked) {
  //       onChange("Present");
  //     } else {
  //       onSetToday();
  //     }
  //   };
  //   return (
  //     <Box sx={{ p: 2 }}>
  //       <Button onClick={handleCheckboxClick}>Currently work here</Button>
  //       <Button onClick={onAccept}>Ok</Button>
  //       <Button onClick={onCancel}>Cancel</Button>
  //     </Box>
  //   );
  // };
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
        A varied education on your resume sums up the value that your learnings
        and background will bring to job.
      </Typography>
      {education?.map((data, i) => {
        return (
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
            expanded={educationAccordion === i}
            onChange={handleEducationAccordion(i)}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon className="accordion-icon" />}
              className="accordion-summary"
            >
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Box>
                  <Box>
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
                  </Box>
                  <Box>
                    {data?.startDate !== "" && data.endDate !== "" && (
                      <Typography
                        sx={{
                          fontSize: "14px",
                          fontWeight: 500,
                          color: "#828BA2",
                        }}
                      >
                        {data?.startDate} to {data?.endDate}
                      </Typography>
                    )}
                  </Box>
                </Box>
                <Box
                  className="accordion-remove-button"
                  onClick={() => removeEducation(i)}
                >
                  <DeleteOutlineRoundedIcon className="remove-button" />
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
                      School
                    </Typography>
                    <TextField
                      variant="filled"
                      size="small"
                      name="companyName"
                      value={data.companyName}
                      fullWidth
                      hiddenLabel
                      onChange={(e) => handleEducation(e, i)}
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
                      name="jobTitle"
                      value={data.jobTitle}
                      fullWidth
                      hiddenLabel
                      onChange={(e) => handleEducation(e, i)}
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
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                          <MobileDatePicker
                            openTo="year"
                            views={["year", "month"]}
                            minDate={dayjs("2000-01-01")}
                            maxDate={dayjs()}
                            value={data.startDate}
                            onChange={(newValue) =>
                              educationStartDate(newValue, i)
                            }
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
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                          <MobileDatePicker
                            openTo="year"
                            views={["year", "month"]}
                            minDate={dayjs("2000-01-01")}
                            maxDate={dayjs()}
                            value={data.endDate}
                            onChange={(newValue) =>
                              educationEndDate(newValue, i)
                            }
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
                      City
                    </Typography>
                    <TextField
                      variant="filled"
                      size="small"
                      name="location"
                      value={data.location}
                      fullWidth
                      hiddenLabel
                      onChange={(e) => handleEducation(e, i)}
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
                      onEditorChange={(content) =>
                        handleEducationDetails(content, i)
                      }
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
        onClick={handleAddEducation}
      >
        + Add one more education
      </Button>
    </Box>
  );
}
