import { NavLink, Outlet } from 'react-router-dom'

function RootLayout() {
  return (
    <div className="root-layout">
       <header>
          <div className='logo'>
              <h1><a href='/'>Rush</a></h1>
          </div>
            <nav>
                <NavLink className="link" to="">About Me</NavLink>
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