import { Box, Button, Grid, Typography } from "@mui/material";
import React, { useContext } from "react";
import { DataContext } from "../../DataProcessing/DataProcessing";
import LanguageActive from "../../Assets/Icons/LanguageActive";
import LanguageDisable from "../../Assets/Icons/LanguageDisable";
import ReferenceActive from "../../Assets/Icons/ReferenceActive";
import ReferenceDisable from "../../Assets/Icons/ReferenceDisable";
import CourseActive from "../../Assets/Icons/CourseActive";
import CourseDisable from "../../Assets/Icons/CourseDisable";
import HobbiesActive from "../../Assets/Icons/HobbiesActive";
import HobbiesDisable from "../../Assets/Icons/HobbiesDisable";
import IntershipActive from "../../Assets/Icons/IntershipActive";
import IntershipDisable from "../../Assets/Icons/IntershipDisable";
import ActivitiesActive from "../../Assets/Icons/ActivitiesActive";
import ActivitiesDisable from "../../Assets/Icons/ActivitiesDisable";

export default function AddSection() {
  const {
    handleOpenExtraCurricularActivities,
    handleOpenHobbies,
    handleOpenLanguages,
    handleOpenCourses,
    handleOpenInternship,
    handleOpenReference,
    openExtraCurricularActivities,
    openHobbies,
    openLanguages,
    openCourses,
    openInternship,
    openReference,
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
      <Typography
        sx={{ fontSize: "20px", fontWeight: 700, mb: 2 }}
        color="text.500"
      >
        Add Section
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Button
            startIcon={
              openExtraCurricularActivities ? (
                <ActivitiesDisable />
              ) : (
                <ActivitiesActive />
              )
            }
            sx={{ fontSize: "16px", fontWeight: 500, textTransform: "none" }}
            onClick={handleOpenExtraCurricularActivities}
            disabled={openExtraCurricularActivities && true}
          >
            Extra-curricular Activities
          </Button>
        </Grid>
        <Grid item xs={12} md={6}>
          <Button
            startIcon={openCourses ? <CourseDisable /> : <CourseActive />}
            sx={{ fontSize: "16px", fontWeight: 500, textTransform: "none" }}
            onClick={handleOpenCourses}
            disabled={openCourses && true}
          >
            Courses
          </Button>
        </Grid>
        <Grid item xs={12} md={6}>
          <Button
            startIcon={openHobbies ? <HobbiesDisable /> : <HobbiesActive />}
            sx={{ fontSize: "16px", fontWeight: 500, textTransform: "none" }}
            onClick={handleOpenHobbies}
            disabled={openHobbies && true}
          >
            Hobbies
          </Button>
        </Grid>
        <Grid item xs={12} md={6}>
          <Button
            startIcon={
              openInternship ? <IntershipDisable /> : <IntershipActive />
            }
            sx={{ fontSize: "16px", fontWeight: 500, textTransform: "none" }}
            onClick={handleOpenInternship}
            disabled={openInternship && true}
          >
            Internships
          </Button>
        </Grid>
        <Grid item xs={12} md={6}>
          <Button
            startIcon={openLanguages ? <LanguageDisable /> : <LanguageActive />}
            sx={{ fontSize: "16px", fontWeight: 500, textTransform: "none" }}
            onClick={handleOpenLanguages}
            disabled={openLanguages && true}
          >
            Language
          </Button>
        </Grid>
        <Grid item xs={12} md={6}>
          <Button
            startIcon={
              openReference ? <ReferenceDisable /> : <ReferenceActive />
            }
            sx={{ fontSize: "16px", fontWeight: 500, textTransform: "none" }}
            onClick={handleOpenReference}
            disabled={openReference && true}
          >
            References
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}
