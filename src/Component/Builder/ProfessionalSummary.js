import { Box, Typography } from "@mui/material";
import React, { useContext } from "react";
import { Editor } from "@tinymce/tinymce-react";
import "./Style/EditorStyle.css";
import { DataContext } from "../../DataProcessing/DataProcessing";
export default function ProfessionalSummary() {
  const { handleEditorChange, professionalSummary , } = useContext(DataContext);

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
        Professional Summary
      </Typography>
      <Typography sx={{ fontSize: "14px", mb: 2 }} color="text.400">
        Write 2-4 short & energetic sentences to interest the reader! Mention
        your role, experience & most importantly - your biggest achievements,
        best qualities and skills.
      </Typography>
      <Box>
        <Editor
          apiKey="q15jacj5azzopukv0hldcafwptxanxfvjsizqpn9y2jztsur"
          initialValue={professionalSummary}
          onEditorChange={handleEditorChange}
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
            toolbar: "bold italic underline strikethrough | bullist numlist",
            content_style: "body { font-size:16px ; font-weight: 500 }",
          }}
        />
      </Box>
    </Box>
  );
}
