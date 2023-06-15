import React from 'react'
import {useLocation, Link} from 'react-router-dom'

export default function NavigationPath() {
    const location = useLocation()
    let currentLink = ""
    const links = location.pathname.split('/')
        .filter(link => link !== '')
        .map(link => {
            currentLink += `/${link}`
            return(
                <div key={link}>
                    <Link to={currentLink}>{link}</Link>
                </div>
            )
        })
  return (
    <div>
       {links}
    </div>
  )
}
