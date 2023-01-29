import { useState, useEffect } from "react";
export const AddSection = () => {
  const [order, setOrder] = useState([]);
  const handleAddSectionLists = (name) => {
    let newArray = [...order];
    if (!newArray.includes(name)) {
      newArray.push(name);
    }
    setOrder(newArray);
    localStorage.setItem("add-section-lists", JSON.stringify(newArray));
  };
  const handleRemoveAddSectionList = (name) => {
    let newArray = order.filter((item) => item !== name);
    setOrder(newArray);
    localStorage.setItem("add-section-lists", JSON.stringify(newArray));
  };
  useEffect(() => {
    const addSectionLists = JSON.parse(
      localStorage.getItem("add-section-lists")
    );
    if (addSectionLists) {
      setOrder(addSectionLists);
    }
  }, []);
  return { handleAddSectionLists, order, handleRemoveAddSectionList };
};
