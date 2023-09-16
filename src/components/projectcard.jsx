import React from "react";

export const ProjectCard = (props) => {

    const handleClick = () => {
        window.open(props.demo)
    }

    return (
        <div className="projectcard" onClick={handleClick}>
            <div className="projectimage">
                <img src={`/img/project_images/${props.img}`} alt={props.alt} />
            </div>
            <div className="projectdescription">
                <h1>{props.name}</h1>
                <p>{props.description}</p>
            </div>
        </div>
    )
}