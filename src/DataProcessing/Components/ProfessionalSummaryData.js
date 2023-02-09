import { useState, useEffect } from "react";
export const ProfessionalSummaryData = () => {
  const [professionalSummary, setProfessionalSummary] = useState();
  const handleEditorChange = (professionalSummary, editor) => {
    setProfessionalSummary(professionalSummary);
    localStorage.setItem("professional-summary", professionalSummary);
  };
  useEffect(() => {
    const savedData = localStorage.getItem("professional-summary");
    if (savedData) {
      setProfessionalSummary(savedData);
    }
  }, []);

  return { handleEditorChange, professionalSummary,setProfessionalSummary };
};