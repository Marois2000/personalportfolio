import React from "react";

export const Navbar = () => {
    return (
        <div className="navbar">
            <div>
                <img src="img/headshot.png" alt="Of Tyler Marois" />
                <button>Home</button>
                <button>About</button>
                <button>Experience</button>
                <button>Skills</button>
                <button>Projects</button>
                <button>Contact</button>
            </div>
        </div>
    );
}