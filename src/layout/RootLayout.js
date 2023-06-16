import { NavLink, Outlet, Link } from 'react-router-dom'
// import NavigationPath from '../components/NavigationPath'

import logo from "../asset/icons8-portfolio-48.png"
function RootLayout() {
  return (
    <div className="root-layout">
       <header>
          <div  className='logo'> 
              <Link to='/' className='logo-text'>Portfolio</Link>
          </div>
            <nav>
                <NavLink className="link" to="">About</NavLink>
                <NavLink className="link" to="project">Projects</NavLink>
                
                <NavLink className="link" to="contact">Contact</NavLink>
            </nav>
       </header>
       <main>
        
        <Outlet />
       </main>
    </div>
  )
}

export default RootLayout