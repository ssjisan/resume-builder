import { useState, useEffect } from "react";
export const SkillData = () => {
  const [skill, setSkill] = useState([]);
  const [skillAccordion, setSkillAccordion] = useState();
  const handleSkillAccordion = (i) => (event, newExpanded) => {
    setSkillAccordion(newExpanded ? i : false);
  };
  const handleSkill = (e, index) => {
    const { name, value } = e.target;
    const list = [...skill];
    list[index][name] = value;
    setSkill(list);
    localStorage.setItem("skill", JSON.stringify(list));
  };
  const handleAddSkill = () => {
    setSkill([
      ...skill,
      {
        skill: "",
        level: "",
      },
    ]);
  };
  useEffect(() => {
    const skillData = JSON.parse(localStorage.getItem("skill"));
    if (skillData) {
      setSkill(skillData);
    }
  }, []);
  const removeSkill = (i) => {
    const list = [...skill];
    list.splice(i, 1);
    setSkill(list);
    localStorage.setItem("skill", JSON.stringify(list));
  };
  return {
    skill,
    skillAccordion,
    handleSkillAccordion,
    handleSkill,
    handleAddSkill,
    removeSkill,
  };
};
