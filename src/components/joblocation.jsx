import React from "react";

export const JobLocation = (props) => {
    return (
        <div className="joblocation">
            <h1>{props.location}</h1>
            <h2>{props.date}</h2>
        </div>
    )
}