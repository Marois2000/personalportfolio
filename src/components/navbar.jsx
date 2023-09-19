import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import headshot from "../img/headshot.png"
import MenuIcon from "../img/menu.png"
import { useState } from "react";

export const Navbar = () => {

    const [menu, setMenu] = useState("off")

    const toggleMenu = () => {
        if(menu == " off") {
            setMenu("on")
        } else {
            setMenu("off")
        }
    }

    return (
        <div className="navbar">
            <div>
                <img className="menu" src={MenuIcon} alt="" />
                <img onClick={() => {}} className="me" src={headshot} alt="Of Tyler Marois" />
                <button>
                    <Link className="nav"
                    activeClass="active"
                    to="hero"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                    >Home</Link>
                </button>
                <button><Link className="nav"
                    activeClass="active"
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                    >About</Link></button>
                <button><Link className="nav"
                    activeClass="active"
                    to="skills"
                    spy={true}
                    smooth={true}
                    offset={-75}
                    duration={500}
                    >Skills</Link></button>
                <button><Link className="nav"
                    activeClass="active"
                    to="experience"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                    >Experience</Link></button>
                <button><Link className="nav"
                    activeClass="active"
                    to="projects"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                    >Projects</Link></button>
                <button><Link className="nav"
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