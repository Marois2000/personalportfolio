import React from "react";
import { JobLocation } from "./joblocation";
import { JobName } from "./jobname";
import { JobSkill } from "./jobskill";

export const JobCard = (props) => {
    return (
        <div className="jobcard">
            <div className="jobcardhead">
                <JobName company={props.company} title={props.title}/>
                <JobLocation location={props.location} date={props.date}/>
            </div>
            <div className="jobdescription">
                <p>{props.description}</p>
            </div>
            <div className="jobcardfoot">
                {props.skills.map((skill) => <JobSkill skill={skill}/>)}
            </div>
        </div>
    )
}