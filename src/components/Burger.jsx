import React from 'react'
import { NavLink } from 'react-router-dom'
import { useState } from 'react';

function Burger() {
    let [toogle, setToogle] = useState();
    const toogleBurger = () => {
        setToogle(!toogle)
    }
  return (
        <nav className="burger">
            <i className="fa-sharp fa-solid fa-bars fa-beat-fade fa-2xl" onClick={toogleBurger}></i>
            <div className={toogle?"show-whole-link":'hide'}>
            <NavLink className="link" to="">About</NavLink>
            <NavLink className="link" to="project">Projects</NavLink>
            <NavLink className="link" to="contact">Contact</NavLink>
            </div>
        </nav>
  )
}

export default Burger