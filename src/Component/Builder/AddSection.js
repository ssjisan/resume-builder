import { Box, Button, Grid, Typography } from "@mui/material";
import React, { useContext } from "react";
import LanguageIcon from "../../Assets/Icons/LanguageIcon";
import ReferenceActive from "../../Assets/Icons/ReferenceActive";
import CourseActive from "../../Assets/Icons/CourseActive";
import HobbiesActive from "../../Assets/Icons/HobbiesActive";
import IntershipActive from "../../Assets/Icons/IntershipActive";
import { DataContext } from "../../DataProcessing/DataProcessing";
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
            startIcon={<CourseActive />}
            sx={{ fontSize: "16px", fontWeight: 500, textTransform: "none" }}
            onClick={handleOpenCourses}
            disabled={openCourses && true}
          >
            Courses
          </Button>
        </Grid>
        <Grid item xs={12} md={6}>
          <Button
            startIcon={<HobbiesActive />}
            sx={{ fontSize: "16px", fontWeight: 500, textTransform: "none" }}
            onClick={handleOpenHobbies}
            disabled={openHobbies && true}
          >
            Hobbies
          </Button>
        </Grid>
        <Grid item xs={12} md={6}>
          <Button
            startIcon={<IntershipActive />}
            sx={{ fontSize: "16px", fontWeight: 500, textTransform: "none" }}
            onClick={handleOpenInternship}
            disabled={openInternship && true}
          >
            Internships
          </Button>
        </Grid>
        <Grid item xs={12} md={6}>
          <Button
            startIcon={<LanguageIcon />}
            sx={{ fontSize: "16px", fontWeight: 500, textTransform: "none" }}
            onClick={handleOpenLanguages}
            disabled={openLanguages && true}
          >
            Language
          </Button>
        </Grid>
        <Grid item xs={12} md={6}>
          <Button
            startIcon={<ReferenceActive />}
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
