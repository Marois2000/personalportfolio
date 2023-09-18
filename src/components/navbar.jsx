import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import headshot from "../img/headshot.png"

export const Navbar = () => {
    return (
        <div className="navbar">
            <div>
                <img src={headshot} alt="Of Tyler Marois" />
                <button>
                    <Link
                    activeClass="active"
                    to="hero"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                    >Home</Link>
                </button>
                <button><Link
                    activeClass="active"
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                    >About</Link></button>
                <button><Link
                    activeClass="active"
                    to="skills"
                    spy={true}
                    smooth={true}
                    offset={-75}
                    duration={500}
                    >Skills</Link></button>
                <button><Link
                    activeClass="active"
                    to="experience"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                    >Experience</Link></button>
                <button><Link
                    activeClass="active"
                    to="projects"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                    >Projects</Link></button>
                <button><Link
                    activeClass="active"
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                    >Contact</Link></button>
            </div>
        </div>
    );
}