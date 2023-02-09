import React, { createContext, useState } from "react";
import { AddSection } from "./Components/AddSection";
import { EmploymentHistoryData } from "./Components/EmploymentHistoryData";
import { PersonalDetailsData } from "./Components/PersonalDetailsData";
import { ProfessionalSummaryData } from "./Components/ProfessionalSummaryData";
import { SocialMediaData } from "./Components/SocialMediaData";

export const DataContext = createContext();

export default function DataProcessing({ children }) {
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
    setSocialMediaTitle,
  } = SocialMediaData();
  const { handleAddSectionLists, order, handleRemoveAddSectionList } =
    AddSection();
  const { personaleDetails, handlePersonalDetails, setPersonalDetails } =
    PersonalDetailsData();
  const [expanded, setExpanded] = useState();
  // For Details Accordion
  const handleAccordion = (i) => (event, newExpanded) => {
    setExpanded(newExpanded ? i : false);
  };
  const { handleEditorChange, professionalSummary } = ProfessionalSummaryData();
  const {
    handleEmploymentDetails,
    jobDescription,
    startDate,
    endDate,
    setStartDate,
    setEndDate,
    employmentAccordionexpanded,
    handleEmploymentAccordion,
    handleAddEmploymentHistory,
    handleEmploymentHistory,
    removeEmploymentHistory,
    setEmploymentHistory,
    employmentHistory,
  } = EmploymentHistoryData();
  console.log(employmentHistory);
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
        handleAddSectionLists,
        order,
        handleRemoveAddSectionList,
        personaleDetails,
        handlePersonalDetails,
        setPersonalDetails,
        handleEditorChange,
        professionalSummary,
        handleEmploymentDetails,
        jobDescription,
        startDate,
        endDate,
        setStartDate,
        setEndDate,
        employmentAccordionexpanded,
        handleEmploymentAccordion,
        handleAddEmploymentHistory,
        handleEmploymentHistory,
        removeEmploymentHistory,
        setEmploymentHistory,
        employmentHistory,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
