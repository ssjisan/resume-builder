import { Box, Button, Grid, Typography } from "@mui/material";
import React ,{useContext} from "react";
import LanguageIcon from "../../Assets/Icons/LanguageIcon";
import ReferenceActive from "../../Assets/Icons/ReferenceActive";
import CourseActive from "../../Assets/Icons/CourseActive";
import HobbiesActive from "../../Assets/Icons/HobbiesActive";
import IntershipActive from "../../Assets/Icons/IntershipActive";
import { DataContext } from "../../DataProcessing/DataProcessing";

export default function AddSection() {
  const { handleOpenExtraCurricularActivities } =
    useContext(DataContext);
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
            startIcon={<LanguageIcon />}
            sx={{ fontSize: "16px", fontWeight: 500, textTransform: "none" }}
            onClick={handleOpenExtraCurricularActivities}
          >
            Extra-curricular Activities
          </Button>
        </Grid>
        <Grid item xs={12} md={6}>
          <Button
            startIcon={<CourseActive />}
            sx={{ fontSize: "16px", fontWeight: 500, textTransform: "none" }}
          >
            Courses
          </Button>
        </Grid>
        <Grid item xs={12} md={6}>
          <Button
            startIcon={<HobbiesActive />}
            sx={{ fontSize: "16px", fontWeight: 500, textTransform: "none" }}
          >
            Hobbies
          </Button>
        </Grid>
        <Grid item xs={12} md={6}>
          <Button
            startIcon={<IntershipActive />}
            sx={{ fontSize: "16px", fontWeight: 500, textTransform: "none" }}
          >
            Internships
          </Button>
        </Grid>
        <Grid item xs={12} md={6}>
          <Button
            startIcon={<LanguageIcon />}
            sx={{ fontSize: "16px", fontWeight: 500, textTransform: "none" }}
          >
            Language
          </Button>
        </Grid>
        <Grid item xs={12} md={6}>
          <Button
            startIcon={<ReferenceActive />}
            sx={{ fontSize: "16px", fontWeight: 500, textTransform: "none" }}
          >
            References
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}
