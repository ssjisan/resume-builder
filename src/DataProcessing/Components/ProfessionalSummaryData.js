import { useState, useEffect } from "react";
export const ProfessionalSummaryData = () => {
  const [professionalSummary, setProfessionalSummary] = useState("");
  const handleEditorChange = (professionalSummary, editor) => {
    setProfessionalSummary(professionalSummary);
    localStorage.setItem(
      "professional-summary",
      JSON.stringify(professionalSummary)
    );
  };
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("professional-summary"));
    if (data) {
      setProfessionalSummary(data);
    }
  }, []);

  return { handleEditorChange, professionalSummary };
};
