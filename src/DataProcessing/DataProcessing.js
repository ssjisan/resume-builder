import React, { createContext, useState } from "react";
import { SocialMedia } from "./Components/SocialMedia";
import { AddSection } from "./Components/AddSection";

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
  const { handleClick, order, handleRemoveAddSectionList } = AddSection();
  const [expanded, setExpanded] = useState();
  // For Details Accordion
  const handleAccordion = (i) => (event, newExpanded) => {
    setExpanded(newExpanded ? i : false);
  };
  console.log(order);
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
        handleClick,
        order,
        handleRemoveAddSectionList
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
