import React from "react";

const ProjectComponent = ({projectClass, imageUrl, title, genre, description, linkUrl, btnClass, btnText}) => {
    return(
        <div className={projectClass}>
            <img src={imageUrl} alt="project display"></img>
            <h2>{title}</h2>
            <h4>{genre}</h4>
            <p>{description}</p>
            <div className={btnClass}><a href={linkUrl} target="_blank" rel="noopener noreferrer">{btnText}</a></div>
        </div>
    )
}

export default ProjectComponent;