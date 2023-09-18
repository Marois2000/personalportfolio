import React from "react";
import {Skill} from "../components/skill"
import html from "../img/skill_icons/html.png";
import css from "../img/skill_icons/css.png";
import javascript from "../img/skill_icons/javascript.png";
import react from "../img/skill_icons/react.png";
import reactnative from "../img/skill_icons/reactnative.png";
import java from "../img/skill_icons/java.png";
import c from "../img/skill_icons/c.png";
import cplus from "../img/skill_icons/cplus.png";
import csharp from "../img/skill_icons/csharp.png";
import python from "../img/skill_icons/python.png";
import git from "../img/skill_icons/git.png";
import unity from "../img/skill_icons/unity.png";
import sql from "../img/skill_icons/sql.png";
import firebase from "../img/skill_icons/firebase.png";


export const Skills = () => {
    return(
        <div className="skills section" title="skills">
            <h1>My Skills</h1>
            <div className="skillholder">
                <Skill img={html} skill="HTML"/>
                <Skill img={css} skill="CSS"/>
                <Skill img={javascript} skill="Javascript"/>
                <Skill img={react} skill="React"/>
                <Skill img={reactnative} skill="React Native"/>
                <Skill img={java} skill="Java"/>
                <Skill img={c} skill="C"/>
                <Skill img={cplus} skill="C++"/>
                <Skill img={csharp} skill="C#"/>
                <Skill img={python} skill="Python"/>
                <Skill img={git} skill="Git/Github"/>
                <Skill img={unity} skill="Unity"/>
                <Skill img={sql} skill="SQL"/>
                <Skill img={firebase} skill="Firebase"/>

            </div>
        </div>
    )
}