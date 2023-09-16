import React from "react";

export const JobName = (props) => {
    return (
        <div className="jobname">
            <h1>{props.company}</h1>
            <h2>{props.title}</h2>
        </div>
    )
}