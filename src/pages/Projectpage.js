import React from "react";

import ProjectComp from "./../components/project";

import got from "./../resources/photos/got.png";
import nasa from "./../resources/photos/nasa.png";
import outdrop from "./../resources/photos/outdrop.png";

export default function Projectpage(){
    return(
        <>
        <h2 className="underline--magical projectsH">Selection of recent projects</h2>
        <ProjectComp projectClass="project projectGame"
        imageUrl={got}
        title="Game of Matches"
        genre="Web Design &#38; Development"
        description="Dating application inspired game of thrones board game developed for submission for NOROFF FEU2 Semester Project. Developed with HTML, CSS &#38; Javascript."
        btnClass="btn btn-primary projectGameBtn"
        btnText="Website link"
        linkUrl="https://relaxed-noyce-737d45.netlify.app"
        />
        <ProjectComp projectClass="project projectOutdrop"
        imageUrl={outdrop}
        title="OUTDROP Merch Website"
        genre="Web Design &#38; UI"
        description="Web design and prototype created for clothing brand OUTDROP. Development is put on hold for this project."
        btnClass="btn btn-primary projectOutdropBtn"
        btnText="Prototype link"
        />
        <ProjectComp projectClass="project projectNasa"
        imageUrl={nasa}
        title="NASA for Dummies"
        genre="Web Design &#38; Development"
        description="Informative website about NASA with information conveyed simply with children as the primary target group. Developed with HTML, CSS &#38; Javascript."
        btnClass="btn btn-primary projectNasaBtn"
        btnText="Website link"
        linkUrl="http://bunnycat.no/NASA/"
        />
        </>
    )
}