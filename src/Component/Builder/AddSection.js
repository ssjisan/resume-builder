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
    handleAddSectionLists,
    order,
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
              order.includes("extracurricular") ? (
                <ActivitiesDisable />
              ) : (
                <ActivitiesActive />
              )
            }
            sx={{ fontSize: "16px", fontWeight: 500, textTransform: "none" }}
            onClick={() => handleAddSectionLists("extracurricular")}
            disabled={order.includes("extracurricular") && true}
          >
            Extra-curricular Activities
          </Button>
        </Grid>
        <Grid item xs={12} md={6}>
          <Button
            startIcon={
              order.includes("courses") ? <CourseDisable /> : <CourseActive />
            }
            sx={{ fontSize: "16px", fontWeight: 500, textTransform: "none" }}
            onClick={() => handleAddSectionLists("courses")}
            disabled={order.includes("courses") && true}
          >
            Courses
          </Button>
        </Grid>
        <Grid item xs={12} md={6}>
          <Button
            startIcon={
              order.includes("hobbies") ? <HobbiesDisable /> : <HobbiesActive />
            }
            sx={{ fontSize: "16px", fontWeight: 500, textTransform: "none" }}
            onClick={() => handleAddSectionLists("hobbies")}
            disabled={order.includes("hobbies") && true}
          >
            Hobbies
          </Button>
        </Grid>
        <Grid item xs={12} md={6}>
          <Button
            startIcon={
              order.includes("internship") ? (
                <IntershipDisable />
              ) : (
                <IntershipActive />
              )
            }
            sx={{ fontSize: "16px", fontWeight: 500, textTransform: "none" }}
            onClick={() => handleAddSectionLists("internship")}
            disabled={order.includes("internship") && true}
          >
            Internships
          </Button>
        </Grid>
        <Grid item xs={12} md={6}>
          <Button
            startIcon={
              order.includes("languages") ? (
                <LanguageDisable />
              ) : (
                <LanguageActive />
              )
            }
            sx={{ fontSize: "16px", fontWeight: 500, textTransform: "none" }}
            onClick={() => handleAddSectionLists("languages")}
            disabled={order.includes("languages") && true}
          >
            Language
          </Button>
        </Grid>
        <Grid item xs={12} md={6}>
          <Button
            startIcon={
              order.includes("reference") ? (
                <ReferenceDisable />
              ) : (
                <ReferenceActive />
              )
            }
            sx={{ fontSize: "16px", fontWeight: 500, textTransform: "none" }}
            onClick={() => handleAddSectionLists("reference")}
            disabled={order.includes("reference") && true}
          >
            References
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}
