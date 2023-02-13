import React, { createContext, useState } from "react";
import { AddSection } from "./Components/AddSection";
import { EducationData } from "./Components/EducationData";
import { EmploymentHistoryData } from "./Components/EmploymentHistoryData";
import { PersonalDetailsData } from "./Components/PersonalDetailsData";
import { ProfessionalSummaryData } from "./Components/ProfessionalSummaryData";
import { SkillData } from "./Components/SkillData";
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
    employmentAccordionexpanded,
    handleEmploymentAccordion,
    handleAddEmploymentHistory,
    handleEmploymentHistory,
    removeEmploymentHistory,
    setEmploymentHistory,
    employmentHistory,
    employmentStartDate,
    employmentEndDate,
  } = EmploymentHistoryData();
  const {
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
  } = EducationData();
  const {
    skill,
    skillAccordion,
    handleSkillAccordion,
    handleSkill,
    handleAddSkill,
    removeSkill,
  } = SkillData();
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
        employmentAccordionexpanded,
        handleEmploymentAccordion,
        handleAddEmploymentHistory,
        handleEmploymentHistory,
        removeEmploymentHistory,
        setEmploymentHistory,
        employmentHistory,
        employmentStartDate,
        employmentEndDate,
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
        skill,
        skillAccordion,
        handleSkillAccordion,
        handleSkill,
        handleAddSkill,
        removeSkill,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
