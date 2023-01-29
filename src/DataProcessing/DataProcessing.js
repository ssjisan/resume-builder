import React, { createContext, useState } from "react";
import { SocialMedia } from "./Components/SocialMedia";
export const DataContext = createContext();

export default function DataProcessing({ children }) {
  const [expanded, setExpanded] = useState();
  const {
    socialMediaTitle,
    socialMedia,
    inputRef,
    isEditing,
    handleAdd,
    handleEdit,
    handleBlur,
    handleChange,
    handleInputChange,
    handleRemove,
    setSocialMediaTitle
  } = SocialMedia();
  // For Details Accordion
  const handleAccordion = (i) => (event, newExpanded) => {
    setExpanded(newExpanded ? i : false);
  };

  const [openExtraCurricularActivities, setOpenExtraCurricularActivities] =
    useState(false);
  const [openHobbies, setOpenHobbies] = useState(false);
  const [openLanguages, setOpenLanguages] = useState(false);
  const [openCourses, setOpenCourses] = useState(false);
  const [openReference, setOpenReference] = useState(false);
  const [openInternship, setOpenInternship] = useState(false);
  const handleOpenExtraCurricularActivities = () => {
    setOpenExtraCurricularActivities(!openExtraCurricularActivities);
  };
  const handleOpenHobbies = () => {
    setOpenHobbies(!openHobbies);
  };
  const handleOpenLanguages = () => {
    setOpenLanguages(!openLanguages);
  };
  const handleOpenCourses = () => {
    setOpenCourses(!openCourses);
  };
  const handleOpenInternship = () => {
    setOpenInternship(!openInternship);
  };
  const handleOpenReference = () => {
    setOpenReference(!openReference);
  };
  return (
    <DataContext.Provider
      value={{
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
        setSocialMediaTitle,
        handleBlur,
        openExtraCurricularActivities,
        handleOpenExtraCurricularActivities,
        handleOpenHobbies,
        openHobbies,
        openLanguages,
        handleOpenLanguages,
        handleOpenCourses,
        handleOpenInternship,
        handleOpenReference,
        openCourses,
        openReference,
        openInternship,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
