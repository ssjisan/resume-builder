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
    setSocialMediaTitle,
  } = SocialMedia();
  // For Details Accordion
  const handleAccordion = (i) => (event, newExpanded) => {
    setExpanded(newExpanded ? i : false);
  };
  const [order, setOrder] = useState([]);

  const handleClick = (name) => {
    let newArray = [...order];
    if (!newArray.includes(name)) {
      newArray.push(name);
    }
    setOrder(newArray);
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
        handleClick,
        order,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
