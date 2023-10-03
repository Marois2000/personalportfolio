import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import headshot from "../img/headshot.png"
import { useState } from "react";
import { func } from "prop-types";
import sun from "../img/sunny.png";
import moon from "../img/crescent-moon.png";
import { Menu } from "./menu";

const root = document.documentElement;


export const Navbar = () => {
    const [light, setLight] = useState(false)

   const flipColors = () => {
    setLight(!light);
    if(light) {
        root.style.setProperty('--primary', '#000000');
        root.style.setProperty('--secondary', '#ffffff');
    } else {
        root.style.setProperty('--primary', '#ffffff');
        root.style.setProperty('--secondary', '#000000');
    }
   }

    return (
        <div className="navbar">
            <div className="buttons">
                <img  className="me" src={headshot} alt="Of Tyler Marois" />
                
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

                <div className="lightdark">
                    <input type="checkbox" class="checkbox" id="checkbox"/>
                    <label for="checkbox" class="checkbox-label" onClick={flipColors}>
                        <i class="fas fa-sun"><img src={sun} alt="" /></i>
                        <i class="fas fa-moon"><img src={moon} alt="" /></i>
                        <span class="ball"></span>
                    </label>
                </div>

            </div>

            
            
        </div>
    );
}