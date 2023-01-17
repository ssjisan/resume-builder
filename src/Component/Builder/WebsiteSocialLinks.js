import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Grid,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import React, { useContext } from "react";
import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { DataContext } from "../../DataProcessing/DataProcessing";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";

export default function WebsiteSocialLinks() {
  const {
    expanded,
    socialMedia,
    handleAccordion,
    handleAdd,
    handleRemove,
    handleInputChange,
    socialMediaTitle,
    isEditing,
    inputRef,
    handleEdit,
    handleChange,
    handleFocus,
    handleHover,
    hoveredTitle,
    setHover,
  } = useContext(DataContext);
  const inputBox = {
    fontSize: "24px",
    fontWeight: 700,
    color: "#1E2532",
    border: "none",
    padding: "0px",
    width:"fit",
    cursor:"pointer",
    resize: "both",

    "&&&:focus": {
      backgroundColor: "red",
    },
  };

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
      {isEditing ? (
        <Box sx={{ display: "flex", mb: 2, height: "42px"}}>
          <input
            ref={inputRef}
            value={socialMediaTitle}
            onChange={handleChange}
            onFocus={handleFocus}
            style={inputBox}
          />
        </Box>
      ) : (
        <Box sx={{ display: "flex", gap: 2 }}>
          {socialMediaTitle === "" ? (
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                mb: 2,
                height: "42px",
                width: "100%",
              }}
              onMouseEnter={() => handleHover("Social Media Title")}
              onMouseLeave={() => setHover(false)}
            >
              <Typography
                sx={{ fontSize: "24px", fontWeight: 700 }}
                color="text.500"
              >
                Untitled
              </Typography>
              <IconButton
                onClick={handleEdit}
                sx={{
                  display:
                    hoveredTitle === "Social Media Title" ? "block" : "none",
                  width: "40px",
                  height: "40px",
                }}
              >
                <DriveFileRenameOutlineIcon
                  size="small"
                  sx={{ color: "#bec4d5" }}
                />
              </IconButton>
            </Box>
          ) : (
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                mb: 2,
                height: "42px",
                width: "100%",
              }}
              onMouseEnter={() => handleHover("Social Media Title")}
              onMouseLeave={() => setHover(false)}
            >
              <Typography
                sx={{ fontSize: "24px", fontWeight: 700 }}
                color="text.500"
              >
                {socialMediaTitle}
              </Typography>
              <IconButton
                onClick={handleEdit}
                sx={{
                  display:
                    hoveredTitle === "Social Media Title" ? "block" : "none",
                  width: "40px",
                  height: "40px",
                }}
              >
                <DriveFileRenameOutlineIcon
                  size="small"
                  sx={{ color: "#bec4d5" }}
                />
              </IconButton>
            </Box>
          )}
        </Box>
      )}
      <Typography sx={{ fontSize: "14px", mb: 2 }} color="text.400">
        You can add links to websites you want hiring managers to see! Perhaps
        It will be a link to your portfolio, LinkedIn profile, or personal
        website
      </Typography>
      {socialMedia?.map((data, i) => {
        return (
          <Accordion
            sx={{
              border: "1px solid #e7eaf4",
              borderRadius: 2,
              boxShadow: "none",
              mb: 2,
            }}
            key={i}
            expanded={expanded === i}
            onChange={handleAccordion(i)}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Typography
                  sx={{ fontSize: "16px", fontWeight: 600 }}
                  color="text.500"
                >
                  {data.Name ? data.Name : "Not Specified"}
                </Typography>
                <Box
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: "100%",
                  }}
                >
                  <IconButton size="large" onClick={() => handleRemove(i)}>
                    <DeleteOutlineRoundedIcon color="text.100" />
                  </IconButton>
                </Box>
              </Box>
            </AccordionSummary>
            <AccordionDetails>
              <Box>
                <Grid container rowSpacing={3} columnSpacing={{ xs: 2, md: 4 }}>
                  <Grid item xs={12} md={6}>
                    <Typography
                      sx={{ fontSize: "14px", mb: 1, fontWeight: 400 }}
                      color="text.400"
                    >
                      Name
                    </Typography>
                    <TextField
                      variant="filled"
                      size="small"
                      fullWidth
                      hiddenLabel
                      name="Name"
                      value={data.Name}
                      onChange={(e) => handleInputChange(e, i)}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Typography
                      sx={{ fontSize: "14px", mb: 1, fontWeight: 400 }}
                      color="text.400"
                    >
                      Link
                    </Typography>
                    <TextField
                      variant="filled"
                      size="small"
                      fullWidth
                      name="Link"
                      value={data.Link}
                      onChange={(e) => handleInputChange(e, i)}
                      hiddenLabel
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
        }}
        onClick={handleAdd}
      >
        + Add one more
      </Button>
    </Box>
  );
}
