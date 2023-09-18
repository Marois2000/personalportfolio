import React from "react";
import linkedin from "../img/socials/linkedin.png";
import github from "../img/socials/github.svg";
import insta from "../img/socials/insta.svg";
import facebook from "../img/socials/facebook.svg"

export const Contact = () => {
    return(
        <div className="contact section" title="contact">
            <h1>Contact Me!</h1>
            <div className="personals">
                <h2>Phone: <a href="tel:6037160507">603-716-0507</a></h2>
                <h2>Email: <a href="mailto:tmarois85@gmail.com">tmarois85@gmail.com</a></h2>
            </div>
            <div className="socials">
                <img src={linkedin} alt="LinkedIn" onClick={() => window.open("https://www.linkedin.com/in/tyler-marois-66b9b3267/")}/>
                <img src={github} alt="Github" onClick={() => window.open("https://github.com/marois2000/")}/>
                <img src={insta} alt="Instagram" onClick={() => window.open("https://www.instagram.com/t.marois85/")}/>
                <img src={facebook} alt="Facebook" onClick={() => window.open("https://www.facebook.com/tyler.marois.9/")}/>
            </div>
        </div>
    )
}