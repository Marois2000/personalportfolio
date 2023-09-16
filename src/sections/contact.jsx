import React from "react";

export const Contact = () => {
    return(
        <div className="contact" title="contact">
            <h1>Contact Me!</h1>
            <div className="personals">
                <h2>Phone: <a href="tel:6037160507">603-716-0507</a></h2>
                <h2>Email: <a href="mailto:tmarois85@gmail.com">tmarois85@gmail.com</a></h2>
            </div>
            <div className="socials">
                <img src="/img/socials/linkedin.png" alt="LinkedIn" onClick={() => window.open("https://www.linkedin.com/in/tyler-marois-66b9b3267/")}/>
                <img src="/img/socials/github.svg" alt="Github" onClick={() => window.open("https://github.com/marois2000/")}/>
                <img src="/img/socials/insta.svg" alt="Instagram" onClick={() => window.open("https://www.instagram.com/t.marois85/")}/>
                <img src="/img/socials/facebook.svg" alt="Facebook" onClick={() => window.open("https://www.facebook.com/tyler.marois.9/")}/>
            </div>
        </div>
    )
}