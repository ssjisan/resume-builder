import { useState } from "react";
export const EmploymentHistoryData = () => {
  const [employmentHistory, setEmploymentHistory] = useState([]);
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [jobDescription, setJobDescription] = useState();

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
  const handleEmploymentDetails = (jobDescription, editor) => {
    setEmploymentHistory({
      ...employmentHistory,
      jobDescription: jobDescription,
    });
  };
  const handleEmploymentHistory = (e, index) => {
    const { name, value } = e.target;
    const list = [...employmentHistory];
    list[index][name] = value;
    setEmploymentHistory(list);
  };
  const removeEmploymentHistory = (i) => {
    const list = [...employmentHistory];
    list.splice(i, 1);
    setEmploymentHistory(list);
  };
  return {
    handleEmploymentDetails,
    jobDescription,
    startDate,
    endDate,
    setStartDate,
    setEndDate,
    handleEmploymentAccordion,
    handleAddEmploymentHistory,
    handleEmploymentHistory,
    removeEmploymentHistory,
    setEmploymentHistory,
    employmentHistory,
    employmentAccordionexpanded,
  };
};
