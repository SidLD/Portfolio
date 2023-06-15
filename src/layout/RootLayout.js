import { NavLink, Outlet, Link } from 'react-router-dom'
import NavigationPath from '../components/NavigationPath'

function RootLayout() {
  return (
    <div className="root-layout">
       <header>
          <div  className='logo'> 
              <Link to='/'>Portfolio</Link>
          </div>
            <nav>
                <NavLink className="link" to="">About Me</NavLink>
                <NavLink className="link" to="project">Projects</NavLink>
                <NavLink className="link" to="contact">Contact</NavLink>
            </nav>
       </header>
       <main>
        
       <span>Location:</span> <NavigationPath />
        <Outlet />
       </main>
    </div>
  )
}

export default RootLayout