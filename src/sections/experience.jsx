import React from "react";
import { JobCard } from "../components/jobcard";

export const Experience = () => {
    return(
        <div className="experience" title="experience">
            <h1>Professional Experience</h1>
            <JobCard company="Guarino Construction LLC."
            title="Website Administrator"
            location="Remote"
            date="05/2023 - Current"
            description="During my tenure as the Website Administrator at Guarino Construction, I was responsible for designing, developing, and maintaining the company's website. I successfully created and managed an appealing and user-friendly online platform using the Wix Website Builder. My contributions included content updates, search engine optimization (SEO) implementation, and ongoing website enhancements that effectively showcased Guarino Construction's services and projects."
            skills={["Wix", "Website Design", "SEO", "Image Editing", "Front-End Design"]}
            />
            <JobCard company="Plymouth State University"
             title="Computer Science Tutor" 
             location="Plymouth, NH" 
             date="08/2022 - Current" 
             description="As a tutor at Plymouth State University, I provided valuable guidance and support to students in the areas of Python, C, and Java programming. My role included teaching fundamental programming concepts and diving deep into topics such as data structures and algorithms. Through personalized assistance and mentorship, I helped students develop strong coding skills and problem-solving abilities, ensuring their success in the world of computer science." 
             skills={["Java", "Python", "C", "Data Structures", "Algorithms"]}/>
            <JobCard company="Freelance"
            title="Software Developer"
            location="Remote"
            date="09/2022 - Current"
            description="During my freelance career, I embarked on a multifaceted journey that encompassed both web and game development. This unique blend allowed me to explore a wide spectrum of projects, each presenting its own set of challenges and opportunities. While I did transform some of these endeavors into fully functional applications for clients, my overarching goal was personal growth and skill development across the realms of web and game development. This fusion of disciplines fueled my passion for coding and creativity, paving the way for a versatile and dynamic skill set."
            skills={["Web Development", "Game Development", "Javascript", "React", "Java"]}
            />
        </div>
    )
}