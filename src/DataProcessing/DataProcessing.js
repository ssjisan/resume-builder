import React, { createContext, useState, useEffect, useRef } from "react";
export const DataContext = createContext();

export default function DataProcessing({ children }) {
  const [expanded, setExpanded] = useState();
  const [socialMedia, setSocialMedia] = useState([]);
  const [socialMediaTitle, setSocialMediaTitle] = useState("");
  const inputRef = useRef(null);
  const [isEditing, setIsEditing] = useState(false);
  const [hover,setHover] = useState("");

  // For Details Accordion 
  const handleAccordion = (i) => (event, newExpanded) => {
    setExpanded(newExpanded ? i : false);
  };

  // For Add New Social Media Field
  const handleAdd = () => {
    setSocialMedia([...socialMedia, { Name: "", Link: "" }]);
  };

  // For Remove Social Media Field
  const handleRemove = (index) => {
    const list = [...socialMedia];
    list.splice(index, 1);
    setSocialMedia(list);
    localStorage.setItem("social", JSON.stringify(list));
  };

  // For Getting Value From Social Media Field
  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...socialMedia];
    list[index][name] = value;
    setSocialMedia(list);
    localStorage.setItem("social", JSON.stringify(socialMedia));
  };

  // For Edit Title
  const handleEdit = () => {
    setIsEditing(true);
    inputRef.current.focus();
  };
  const handleFocus = (event) => {
    event.target.select();
  }
  const handleChange = (event) => {
    const title = event.target.value;
    setSocialMediaTitle(title);
    localStorage.setItem("socialMediaTitle", JSON.stringify(title));
  };
  useEffect(() => {
    const socialMediaData = JSON.parse(localStorage.getItem("social"));
    const socialMediaTitle = JSON.parse(
      localStorage.getItem("socialMediaTitle")
    );
    if (socialMediaData) {
      setSocialMedia(socialMediaData);
    }
    if (socialMediaTitle) {
      setSocialMediaTitle(socialMediaTitle);
    }
  }, []);
  useEffect(() => {
    function handleClickOutside(event) {
      if (inputRef.current && !inputRef.current.contains(event.target)) {
        setIsEditing(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [inputRef]);

  // For Hover State

  const handleHover = ()=>{

  }

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
        setSocialMediaTitle,handleFocus,handleHover
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
