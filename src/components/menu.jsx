import React from "react";
import MenuIcon from "../img/menu.png"
import { useState } from "react";
import { Link } from "react-scroll";

export const Menu = () => {

    const [menu, setMenu] = useState(false)

    function set() {
        setMenu(!menu)
        console.log(menu)
    }

    return (
        <div className="menucontainer" onClick={() => set()}>

            <div className="menu" onClick={() => set()}>
                <img src={MenuIcon} alt="" />
            </div>
            <div className={`dropdown ${menu? 'open' : 'closed'}`}>
                    <button>
                        <Link className="nav"
                        onClick={() => set()}
                        activeClass="active"
                        to="hero"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                        >Home</Link>
                    </button>
                    <button><Link className="nav"
                        onClick={() => set()}
                        activeClass="active"
                        to="about"
                        spy={true}
                        smooth={true}
                        offset={-200}
                        duration={500}
                        >About</Link></button>
                    <button><Link className="nav"
                        activeClass="active"
                        onClick={() => set()}
                        to="skills"
                        spy={true}
                        smooth={true}
                        offset={-75}
                        duration={500}
                        >Skills</Link></button>
                    <button><Link className="nav"
                        activeClass="active"
                        onClick={() => set()}
                        to="experience"
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={500}
                        >Experience</Link></button>
                    <button><Link className="nav"
                        activeClass="active"
                        onClick={() => set()}
                        to="projects"
                        spy={true}
                        smooth={true}
                        offset={-50}
                        duration={500}
                        >Projects</Link></button>
                    <button><Link className="nav"
                        activeClass="active"
                        onClick={() => set()}
                        to="contact"
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={500}
                        >Contact</Link></button>
            </div>
        </div>
    )
}