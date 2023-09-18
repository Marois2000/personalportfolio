import React from "react";
import resume from "../img/Tyler_Marois_-_Software_Developer.pdf";

export const About = () => {

    return (
        <div className="about section" title="about">
            <h1>About Me</h1>
            
            <p>In the world of technology and innovation, I find my true passion. As a Computer Science enthusiast, I'm driven by the endless opportunities to create and solve. Whether I'm immersed in designing captivating user experiences, exploring the intricacies of game development, or delving deep into the realms of mathematics and physics, my journey is one of constant curiosity and discovery.
            <br/><br/>My commitment to the cybersecurity aspect ensures that my creations not only captivate but also prioritize safety and security. Beyond the digital realm, I'm equally dedicated to nurturing others' growth. With experience as a computer science tutor, I find immense joy in sharing knowledge and empowering fellow enthusiasts.
            <br/><br/>Join me on this exhilarating journey, where technology meets creativity, and every line of code represents a new canvas for innovation. Let's explore, learn, and create together in this ever-evolving digital landscape. Welcome to my world of tech-driven wonders!</p>
            <button className="point" onClick={() => window.open(resume)}>Download my Resume</button>
        </div>
    )
}