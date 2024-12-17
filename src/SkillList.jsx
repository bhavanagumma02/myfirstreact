import React from "react";
import Skill from "./Skill";

function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="React" color="blue" />
      <Skill skill="HTML+CSS" color="orange" />
      <Skill skill="JavaScript" color="yellow" />
    </div>
  );
}
export default SkillList;
