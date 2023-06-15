import React from 'react'
import { NavLink } from 'react-router-dom'

function CustomeNavBar() {
    
  return (
        <nav className='navigation-bar'>
            <NavLink className="link" to="">About</NavLink>
            <NavLink className="link" to="project">Projects</NavLink>
            <NavLink className="link" to="contact">Contact</NavLink>
        </nav>
  )
}

export default CustomeNavBar