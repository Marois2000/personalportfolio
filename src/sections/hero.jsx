import React, { useEffect, useRef } from "react";
import Typed from 'typed.js'
import Tilt from 'react-parallax-tilt';
import { Link } from "react-scroll";
import  headshot  from "../img/headshot_onblob.png"

export const Hero = () => {

    const slogan = useRef(null)

    useEffect(() => {
        const options = {
            strings: ["Software Developer", "Problem Solver", "Hard Worker"],
            typeSpeed: 120,
            backSpeed: 50,
            backDelay: 1500,
            loop: true
        }

        const typed = new Typed(slogan.current, options)

        return () => {
            typed.destroy()
        };
    }, [])

    


    return (
        <div className="hero section" title="home">
            <div className="info">
                <div className="title">
                    <h1>Hello!</h1>
                    <h2>I am Tyler Marois</h2>
                    <span ref={slogan}></span>
                </div>
                <div className="contactb">
                    <button className="point"><Link
                            activeClass="active"
                            to="contact"
                            spy={true}
                            smooth={true}
                            offset={175}
                            duration={500}
                        >Contact Me</Link></button>
                    </div>
                </div>
                
            <Tilt className="tilter" tiltReverse={true}>
                <div className="profile">
                    <img src={headshot} alt="of Tyler Marois" />
                </div>
            </Tilt>
        </div>
    );
}