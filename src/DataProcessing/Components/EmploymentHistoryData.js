import { useState,useEffect } from "react";
import dayjs from "dayjs";

export const EmploymentHistoryData = () => {
  const [employmentHistory, setEmploymentHistory] = useState([]);
  const [employmentAccordionexpanded, setEmploymentAccordionexpanded] =
    useState();
  const handleEmploymentAccordion = (i) => (event, newExpanded) => {
    setEmploymentAccordionexpanded(newExpanded ? i : false);
  };
  const handleAddEmploymentHistory = () => {
    setEmploymentHistory([
      ...employmentHistory,
      {
        companyName: "",
        jobTitle: "",
        location: "",
        startDate: "",
        endDate: "",
        jobDescription: "",
      },
    ]);
  };
  const handleEmploymentHistory = (e, index) => {
    const { name, value } = e.target;
    const list = [...employmentHistory];
    list[index][name] = value;
    setEmploymentHistory(list);
    localStorage.setItem("employment-history", JSON.stringify(employmentHistory));
  };
  const employmentStartDate = (event, i) => {
    const list = [...employmentHistory];
    const date = dayjs(event).format("YYYY-MM-DD");
    list[i].startDate = date;
    setEmploymentHistory(list);
    localStorage.setItem("employment-history", JSON.stringify(employmentHistory));
  };
  const employmentEndDate = (event, i) => {
    const list = [...employmentHistory];
    const date = dayjs(event).format("YYYY-MM-DD");
    list[i].endDate = date;
    setEmploymentHistory(list);
    localStorage.setItem("employment-history", JSON.stringify(employmentHistory));
  };
  const handleEmploymentDetails = (content, i) => {
    const list = [...employmentHistory];
    list[i].jobDescription = content;
    setEmploymentHistory(list);
    localStorage.setItem("employment-history", JSON.stringify(employmentHistory));
  };
  const removeEmploymentHistory = (i) => {
    const list = [...employmentHistory];
    list.splice(i, 1);
    setEmploymentHistory(list);
    localStorage.setItem("employment-history", JSON.stringify(list));
  };
  useEffect(() => {
    const employmentData = JSON.parse(localStorage.getItem("employment-history"));
    if (employmentData) {
      setEmploymentHistory(employmentData);
    }
  }, []);
  return {
    handleEmploymentDetails,
    handleEmploymentAccordion,
    handleAddEmploymentHistory,
    handleEmploymentHistory,
    removeEmploymentHistory,
    setEmploymentHistory,
    employmentHistory,
    employmentAccordionexpanded,
    employmentStartDate,
    employmentEndDate,
  };
};
