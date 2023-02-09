import { Button, Checkbox, FormControlLabel, TextField } from "@mui/material";
import { Editor } from "@tinymce/tinymce-react";
import React, { useState } from "react";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { MobileDatePicker } from "@mui/x-date-pickers";
export default function Test() {
  const [testData, setTestData] = useState([]);
  const handleTest = (e, i) => {
    const { name, value } = e.target;
    const list = [...testData];
    list[i][name] = value;
    setTestData(list);
  };
  const handleEditorChange = (content, i) => {
    const list = [...testData];
    list[i].jobDescription = content;
    setTestData(list);
  };
const handleStartData=(startDate,i)=>{
    const list = [...testData];
    const date = dayjs(startDate).format("YYYY-MM-DD");
    list[i].startDate=date;
    setTestData(list)
}
  const handleAdd = () => {
    setTestData([...testData, { companyName: "" }]);
  };

  console.log(testData);
  return (
    <div>
      {" "}
      <>
        {testData.map((data, i) => {
          return (
            <>
              <TextField
                variant="filled"
                size="small"
                name="companyName"
                value={data.companyName}
                fullWidth
                hiddenLabel
                onChange={(e) => handleTest(e, i)}
              />
              <LocalizationProvider dateAdapter={AdapterDayjs}>
      <MobileDatePicker
        views={["year", "month"]}
        value={data.endDate}
        minDate={dayjs("1970-01-01")}
        maxDate={dayjs()}
        onChange={(newValue) =>
            handleStartData(newValue, i)
        }
        renderInput={(params) => (
          <>
            <TextField
              {...params}
              variant="filled"
              size="small"
              hiddenLabel
              fullWidth
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={data.currentlyWorkHere}
                  onChange={(event) => {
                    handleStartData((prevData) => ({
                      ...prevData,
                      currentlyWorkHere: event.target.checked,
                      endDate: event.target.checked
                        ? "present"
                        : prevData.endDate,
                    }));
                  }}
                />
              }
              label="Currently work here"
            />
          </>
        )}
      />
    </LocalizationProvider>
              <Editor
                apiKey="q15jacj5azzopukv0hldcafwptxanxfvjsizqpn9y2jztsur"
                value={data.jobDescription}
                onEditorChange={(content) => handleEditorChange(content, i)}
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
                  content_style: "body { font-size:16px ; font-weight: 500 }",
                }}
              />
            </>
          );
        })}
      </>
      <Button onClick={handleAdd}>Add</Button>
    </div>
  );
}
