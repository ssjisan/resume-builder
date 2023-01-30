import { useState, useEffect } from "react";

export const PersonalDetails = () => {
  const [personaleDetails, setPersonalDetails] = useState({
    jobTitle: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "",
    city: "",
    address: "",
    postalCode: "",
    nationality: "",
    dateOfBirth: "",
  });

  const handlePersonalDetails = (e) => {
    const { name, value } = e.target;
    setPersonalDetails((currentValue) => {
      localStorage.setItem(
        "personal-details",
        JSON.stringify({ ...currentValue, [name]: value })
      );
      return { ...currentValue, [name]: value };
    });
  };
  useEffect(() => {
    const PersonalDetailsData = JSON.parse(
      localStorage.getItem("personal-details")
    );
    if (PersonalDetailsData) {
      setPersonalDetails(PersonalDetailsData);
    }
  }, []);

  return { personaleDetails, handlePersonalDetails };
};
