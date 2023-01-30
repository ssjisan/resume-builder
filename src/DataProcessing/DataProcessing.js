import React, { createContext, useState } from "react";
import { SocialMedia } from "./Components/SocialMedia";
import { AddSection } from "./Components/AddSection";
import { PersonalDetails } from "./Components/PersonalDetails";

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
  } = SocialMedia();
  const { handleAddSectionLists, order, handleRemoveAddSectionList } =
    AddSection();
  const { personaleDetails, handlePersonalDetails , setPersonalDetails} = PersonalDetails();
  const [expanded, setExpanded] = useState();
  // For Details Accordion
  const handleAccordion = (i) => (event, newExpanded) => {
    setExpanded(newExpanded ? i : false);
  };
  console.log(personaleDetails);
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
        setPersonalDetails
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
