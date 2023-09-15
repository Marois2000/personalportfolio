import React, { useEffect, useRef } from "react";
import Typed from 'typed.js'
import Tilt from 'react-parallax-tilt';

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
        <div className="hero">
            <div className="title">
                <h1>Hello!</h1>
                <h2>I am Tyler Marois</h2>
                <span ref={slogan}></span>
            </div>
            <Tilt className="tilter" tiltReverse={true}>
                <div className="profile">
                    <img src="img/headshot_onblob.png" alt="of Tyler Marois" />
                </div>
            </Tilt>
            
        </div>
    );
}