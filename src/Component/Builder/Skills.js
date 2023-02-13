import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Grid,
  TextField,
  MenuItem,
  Select,
  FormControl,
  Button,
} from "@mui/material";
import React, { useContext } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";
import "./Style/InputField.css";
import "./Style/Accordion.css";
import "./Style/EditorStyle.css";
import { DataContext } from "../../DataProcessing/DataProcessing";

export default function Skills() {
  const {
    skill,
    skillAccordion,
    handleSkillAccordion,
    handleSkill,
    handleAddSkill,
    removeSkill,
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
        Skills
      </Typography>
      <Typography sx={{ fontSize: "14px", mb: 2 }} color="text.400">
        Choose 5 of the most important skills to show your talents! Make sure
        they match the keywords of the job listing if applying via an online
        system.
      </Typography>
      {skill.map((data, i) => {
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
            expanded={skillAccordion === i}
            onChange={handleSkillAccordion(i)}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon className="accordion-icon" />}
              className="accordion-summary"
            >
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Box>
                  <Box>
                    {data?.skill === "" ? (
                      <Typography
                        sx={{ fontSize: "14px", fontWeight: 600 }}
                        color="text.500"
                        className="accordion-title"
                      >
                        Not Specified
                      </Typography>
                    ) : (
                      <Typography
                        sx={{ fontSize: "14px", fontWeight: 600 }}
                        color="text.500"
                        className="accordion-title"
                      >
                        {data.skill}
                      </Typography>
                    )}
                  </Box>
                  <Box>
                    <Typography
                      sx={{
                        fontSize: "14px",
                        fontWeight: 500,
                        color: "#828BA2",
                      }}
                    >
                      {data.level}
                    </Typography>
                  </Box>
                </Box>
                <Box
                  className="accordion-remove-button"
                  onClick={() => removeSkill(i)}
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
                      Skill
                    </Typography>
                    <TextField
                      variant="filled"
                      size="small"
                      name="skill"
                      value={data.skill}
                      fullWidth
                      hiddenLabel
                      onChange={(e) => handleSkill(e, i)}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Typography
                      sx={{ fontSize: "14px", mb: 1, fontWeight: 400 }}
                      color="text.400"
                    >
                      Level
                    </Typography>
                    <FormControl
                      variant="filled"
                      fullWidth
                      hiddenLabel
                      size="small"
                    >
                      <Select
                        value={data.level}
                        name="level"
                        onChange={(e) => handleSkill(e, i)}
                      >
                        <MenuItem value="Basic">Basic</MenuItem>
                        <MenuItem value="Intermediate">Intermediate</MenuItem>
                        <MenuItem value="Professional">Professional</MenuItem>
                      </Select>
                    </FormControl>
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
        onClick={handleAddSkill}
      >
        + Add one more skill
      </Button>
    </Box>
  );
}
