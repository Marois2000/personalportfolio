import React from "react";
import { ProjectCard } from "../components/projectcard";
import timevault from "../img/project_images/timevault.jpg";
import swiftreach from "../img/project_images/swiftreach.jpeg";
import chess from "../img/project_images/chess.png";
import gc from "../img/project_images/gc.jpg";
import processes from "../img/project_images/process-schedule.png";


export const Projects = () => {
    return (
        <div className="projects section" title="projects">
            <h1>My Projects</h1>
            <div className="projectgrid">
                <ProjectCard img={timevault} 
                alt="Of TimeVault Main Menu" 
                name="Time Vault" 
                description="The Employee Hours and Tips Tracking App is a custom-built web application designed to streamline the recording of weekly hours and tips for Trend Moving and Storage employees. Developed using React.js and integrated with Firebase NoSQL database technology, this app provides a user-friendly and efficient solution for employees to manage their earnings data conveniently."
                demo="https://timevault.online"
                />
                <ProjectCard img={swiftreach}
                alt="Of Swiftreach 2D Platformer"
                name="Swiftreach"
                description="An exhilarating 2D platformer game created in JavaScript that plunges players into the depths of a treacherous dungeon. The game's objective is clear: embark on a high-speed quest to retrieve the key that unlocks a coveted chest while deftly avoiding menacing spikes that lurk at every turn."
                demo="https://marois2000.github.io/Swiftreach/"
                />
                <ProjectCard img={chess}
                alt="Of Chess on Android"
                name="Chess Engine"
                description="My Java Chess Engine is a testament to my passion and dedication in the realm of chess programming. This project represents my personal achievement in crafting a functional and strategic chess engine using Java."
                demo="https://github.com/Marois2000/Chess-Engine"
                />
                <ProjectCard img={gc}
                alt="Guarino Construction home page"
                name="Guarino Construction Website"
                description="The Guarino Construction website stands as a digital testament to the company's excellence in the construction industry. This online platform was thoughtfully crafted to showcase Guarino Construction's exceptional work, projects, and commitment to quality."
                demo="https://www.guarinoconstruction.com/"
                />
                <ProjectCard img={processes}
                alt="FCFS Vs. Round Robin"
                name="Process Scheduling Algorithms"
                description="This project implements two process scheduling algorithms: First Come First Serve (FCFS) and Round Robin (RR). The goal of this project is to collect data about these algorithms and compare their results. Additionally, a graphical user interface (GUI) has been added to visualize the FCFS and RR algorithms in action."
                demo="https://github.com/Marois2000/Process-Scheduling-algorithm-watcher"
                />
            </div>
            
        </div>
    )
}