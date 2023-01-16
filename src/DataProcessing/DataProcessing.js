import React, { createContext, useState, useEffect, useRef } from "react";
export const DataContext = createContext();

export default function DataProcessing({ children }) {
  const [expanded, setExpanded] = useState();
  const handleAccordion = (i) => (event, newExpanded) => {
    setExpanded(newExpanded ? i : false);
  };
  const [socialMedia, setSocialMedia] = useState([]);
  const handleAdd = () => {
    setSocialMedia([...socialMedia, { Name: "", Link: "" }]);
  };
  const handleRemove = (index) => {
    const list = [...socialMedia];
    list.splice(index, 1);
    setSocialMedia(list);
    localStorage.setItem("social", JSON.stringify(list));
  };
  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...socialMedia];
    list[index][name] = value;
    setSocialMedia(list);
    localStorage.setItem("social", JSON.stringify(socialMedia));
  };
  const [socialMediaTitle, setSocialMediaTitle] = useState("");
  
  const [isEditing, setIsEditing] = useState(false);
  const inputRef = useRef(null);
  
  const handleEdit = () => {
    setIsEditing(true);
  };
  
  const handleChange = (event) => {
    const title = event.target.value
    setSocialMediaTitle(title);
    localStorage.setItem("socialMediaTitle", JSON.stringify(title));
  };
  useEffect(() => {
    const socialMediaData = JSON.parse(localStorage.getItem("social"));
    const socialMediaTitle = JSON.parse(localStorage.getItem("socialMediaTitle"));
    if (socialMediaData) {
      setSocialMedia(socialMediaData);
    }
    if(socialMediaTitle){
      setSocialMediaTitle(socialMediaTitle);
    }
  }, []);
  useEffect(() => {
    function handleClickOutside(event) {
      if (inputRef.current && !inputRef.current.contains(event.target)) {
        setIsEditing(false);
      }
    }
    document.addEventListener("mouseup", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [inputRef]);
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
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
