import React from "react";
import {Skill} from "../components/skill"

export const Skills = () => {
    return(
        <div className="skills" title="skills">
            <h1>My Skills</h1>
            <div className="skillholder">
                <Skill img="html.png" skill="HTML"/>
                <Skill img="css.png" skill="CSS"/>
                <Skill img="javascript.png" skill="Javascript"/>
                <Skill img="react.png" skill="React"/>
                <Skill img="reactnative.png" skill="React Native"/>
                <Skill img="java.png" skill="Java"/>
                <Skill img="c.png" skill="C"/>
                <Skill img="cplus.png" skill="C++"/>
                <Skill img="csharp.png" skill="C#"/>
                <Skill img="python.png" skill="Python"/>
                <Skill img="git.png" skill="Git/Github"/>
                <Skill img="unity.png" skill="Unity"/>
                <Skill img="sql.png" skill="SQL"/>
                <Skill img="firebase.png" skill="Firebase"/>

            </div>
        </div>
    )
}