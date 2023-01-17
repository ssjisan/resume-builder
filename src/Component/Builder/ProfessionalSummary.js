import { Box, Typography } from "@mui/material";
import React, { useRef, useState } from "react";

export default function ProfessionalSummary() {
  const [isEditing, setIsEditing] = useState(false);
  const inputRef = useRef(null);
  const [inputValue, setInputValue] = useState('');

  const handleEditClick = () => {
    setIsEditing(true);
    inputRef.current.disabled = false;
    inputRef.current.focus();
    inputRef.current.select();
  };

  const handleBlur = () => {
    setIsEditing(false);
    inputRef.current.disabled = true;
  }
  const handleChange = (event) => {
    const title = event.target.value;
    setInputValue(title);
  };
  // useEffect(() => {
  //   function handleClickOutside(event) {
  //     if (inputRef.current && !inputRef.current.contains(event.target)) {
  //       setDisabled(true);
  //     }
  //   }
  //   document.addEventListener("mousedown", handleClickOutside);
  //   return () => {
  //     document.removeEventListener("mousedown", handleClickOutside);
  //   };
  // }, [inputRef]);
  
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
        Professional Summary
      </Typography>
      <Typography sx={{ fontSize: "14px", mb: 2 }} color="text.400">
        Write 2-4 short & energetic sentences to interest the reader! Mention
        your role, experience & most importantly - your biggest achievements,
        best qualities and skills.
      </Typography>
      <div>
      <input 
        ref={inputRef} 
        value={inputValue===""? "Untitled" : inputValue} 
        disabled={!isEditing}
        onBlur={handleBlur}
        onChange={(e)=>handleChange(e)}
      />
      <button onClick={handleEditClick}>Edit</button>
    </div>
    </Box>
  );
}
