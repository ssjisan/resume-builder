import { useState, useEffect } from "react";
import dayjs from "dayjs";

export const EducationData = () => {
  const [education, setEducation] = useState([]);
  const [educationAccordion, setEducationAccordion] = useState();
  const handleEducationAccordion = (i) => (event, newExpanded) => {
    setEducationAccordion(newExpanded ? i : false);
  };
  const handleAddEducation = () => {
    setEducation([
      ...education,
      {
        companyName: "",
        jobTitle: "",
        location: "",
        startDate: "",
        endDate: "",
        jobDescription: "",
      },
    ]);
  };
  const handleEducation = (e, index) => {
    const { name, value } = e.target;
    const list = [...education];
    list[index][name] = value;
    setEducation(list);
    localStorage.setItem("education", JSON.stringify(education));
  };
  const educationStartDate = (event, i) => {
    const list = [...education];
    const date = dayjs(event).format("YYYY-MM-DD");
    list[i].startDate = date;
    setEducation(list);
    localStorage.setItem("education", JSON.stringify(education));
  };
  const educationEndDate = (event, i) => {
    const list = [...education];
    const date = dayjs(event).format("YYYY-MM-DD");
    list[i].endDate = date;
    setEducation(list);
    localStorage.setItem("education", JSON.stringify(education));
  };
  const handleEducationDetails = (content, i) => {
    const list = [...education];
    list[i].jobDescription = content;
    setEducation(list);
    localStorage.setItem("education", JSON.stringify(education));
  };
  const removeEducation = (i) => {
    const list = [...education];
    list.splice(i, 1);
    setEducation(list);
    localStorage.setItem("education", JSON.stringify(list));
  };
  useEffect(() => {
    const employmentData = JSON.parse(localStorage.getItem("education"));
    if (employmentData) {
      setEducation(employmentData);
    }
  }, []);
  return {
    handleEducationDetails,
    handleEducationAccordion,
    handleAddEducation,
    handleEducation,
    removeEducation,
    setEducation,
    education,
    educationAccordion,
    educationStartDate,
    educationEndDate,
  };
};
