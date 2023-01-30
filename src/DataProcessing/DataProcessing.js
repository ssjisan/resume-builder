import React, { createContext, useState } from "react";
import { AddSection } from "./Components/AddSection";
import { PersonalDetailsData } from "./Components/PersonalDetailsData";
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
  const { personaleDetails, handlePersonalDetails , setPersonalDetails} = PersonalDetailsData();
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
