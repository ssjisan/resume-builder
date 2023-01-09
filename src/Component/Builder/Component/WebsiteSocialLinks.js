import {
  Box,
  Button,
  Grid,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";

export default function WebsiteSocialLinks() {
  const ref = useRef(null);
  const [width, setWidth] = useState();
  useEffect(() => {
    setWidth(ref.current ? ref.current.offsetWidth : 0);
  }, []);
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };
  const [inputList, setInputList] = useState([{ Name: "", Link: "" }]);
  const handleRemove = (index) => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };
  const handleAdd = () => {
    setInputList([...inputList, { Name: "", Link: "" }]);
  };
  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);
  };
  console.log(inputList);
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
        Website & Social Links
      </Typography>
      <Typography sx={{ fontSize: "14px", mb: 2 }} color="text.400">
        You can add links to websites you want hiring managers to see! Perhaps
        It will be a link to your portfolio, LinkedIn profile, or personal
        website
      </Typography>

      {inputList.map((data, i) => {
        return (
          <Box
            sx={{
              p: 2,
              border: "1px solid #e7eaf4",
              borderRadius: "12px",
              mb: 2,
            }}
            ref={ref}
            onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}
          >
            {isHovering && <Box
              sx={{
                position: "absolute",
                left: `calc(45px + ${width}px)`,
              }}
            >
              <IconButton size="large" onClick={() => handleRemove(i)}>
                <DeleteOutlineRoundedIcon color="text.100" />
              </IconButton>
            </Box>}
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
                  onChange={(e) => handleInputChange(e, i)}
                  hiddenLabel
                />
              </Grid>
            </Grid>
          </Box>
        );
      })}
      <Button
        sx={{ textTransform: "none", fontWeight: 600, mt: 2 }}
        onClick={handleAdd}
      >
        + Add one more
      </Button>
    </Box>
  );
}
