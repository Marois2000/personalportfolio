import React from "react";

export const Skill = ( props ) => {

    return (
        <div className="skillcard">
            <img src={`/img/skill_icons/${props.img}`} alt={props.alt} />
            <h1>{props.skill}</h1>
        </div>
    )
}