import React from "react";

const SkillCompontent = ({icon, name}) => {
    return(
        <div className="skillsInfoCard">
            <img src={icon} alt="skill icon"></img>
                <p>{name}</p>
        </div>
    )
}

export default SkillCompontent;