import React from "react";
import { ProjectCard } from "../components/projectcard";

export const Projects = () => {
    return (
        <div className="projects" title="projects">
            <h1>My Projects</h1>
            <div className="projectgrid">
                <ProjectCard img="timevault.jpg" 
                alt="Of TimeVault Main Menu" 
                name="Time Vault" 
                description="The Employee Hours and Tips Tracking App is a custom-built web application designed to streamline the recording of weekly hours and tips for Trend Moving and Storage employees. Developed using React.js and integrated with Firebase NoSQL database technology, this app provides a user-friendly and efficient solution for employees to manage their earnings data conveniently."
                demo="https://timevault.online"
                />
                <ProjectCard img="swiftreach.jpeg"
                alt="Of Swiftreach 2D Platformer"
                name="Swiftreach"
                description="An exhilarating 2D platformer game created in JavaScript that plunges players into the depths of a treacherous dungeon. The game's objective is clear: embark on a high-speed quest to retrieve the key that unlocks a coveted chest while deftly avoiding menacing spikes that lurk at every turn."
                demo="https://marois2000.github.io/Swiftreach/"
                />
                <ProjectCard img="chess.png"
                alt="Of Chess on Android"
                name="Chess Engine"
                description="My Java Chess Engine is a testament to my passion and dedication in the realm of chess programming. This project represents my personal achievement in crafting a functional and strategic chess engine using Java."
                demo="https://github.com/Marois2000/Chess-Engine"
                />
                <ProjectCard img="gc.jpg"
                alt="Guarino Construction home page"
                name="Guarino Construction Website"
                description="The Guarino Construction website stands as a digital testament to the company's excellence in the construction industry. This online platform was thoughtfully crafted to showcase Guarino Construction's exceptional work, projects, and commitment to quality."
                demo="https://www.guarinoconstruction.com/"
                />
            </div>
            
        </div>
    )
}