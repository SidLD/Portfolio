import { NavLink, Outlet, Link } from 'react-router-dom'
// import NavigationPath from '../components/NavigationPath'

// import logo from "../asset/icons8-portfolio-48.png"
function RootLayout() {
  const slide = (e) => {
    console.log(e)
  //  const item =  document.getElementById('p')
  //  console.log(item)
  }
  return (
    <div className="root-layout">
       <header>
          <div  className='logo'> 
              <Link to='/' className='logo-text'>Portfolio</Link>
          </div>
            <nav>
                <NavLink className="link" id='h' onClick={slide()} to="">About</NavLink>
                <NavLink className="link" id='p'onClick={slide()} to="project">Projects</NavLink>
                <NavLink className="link" id='c'onClick={slide()} to="contact">Contact</NavLink>
            </nav>
       </header>
       <main>
        
        <Outlet />
       </main>
    </div>
  )
}

export default RootLayout