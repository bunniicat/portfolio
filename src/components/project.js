import React from "react";
import { Link } from "react-router-dom";

const ProjectComponent = ({projectClass, imageUrl, title, genre, description, linkUrl, btnClass, btnText}) => {
    return(
        <div className={projectClass}>
            <img src={imageUrl} alt="project display"></img>
            <h2>{title}</h2>
            <h4>{genre}</h4>
            <p>{description}</p>
            <Link to={linkUrl} className={btnClass}>{btnText}</Link>
        </div>
    )
}

export default ProjectComponent;