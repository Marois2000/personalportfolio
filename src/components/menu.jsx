import React from "react";
import MenuIcon from "../img/menu.png"
import { useState } from "react";

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
                <h1>{menu}</h1>
            </div>
        </div>
    )
}