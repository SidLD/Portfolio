import { NavLink, Outlet, Link } from 'react-router-dom'
// import NavigationPath from '../components/NavigationPath'

// import logo from "../asset/icons8-portfolio-48.png"
function RootLayout() {
  let prev = 'h'
  const slide = (e) => {
    if(prev === 'h') {
      switch (e.target.id) {
        //Do Nothing
        case 'h':
          break;
        case 'p':
        document.getElementById("s").style.right = "85px";
          break;
        case 'c':
        document.getElementById("s").style.right = "18px";
          break;
        default:
          break;
      }
    }
    else if(prev === "p"){
      switch (e.target.id) {
        case 'h':
        document.getElementById("s").style.right = "165px";
          break;
        case 'p':
          //Do nothing
          break;
        case 'c':
        document.getElementById("s").style.right = "18px";
          break;
        default:
          break;
      }
    }else{
      switch (e.target.id) {
        case 'h':
          document.getElementById("s").style.right = "165px";
          break;
        case 'p':
        document.getElementById("s").style.right = "85px";
          break;
        case 'c':
          //Do nothing
          break;
        default:
          break;
      }
      document.getElementById("s").style.width = "70px";
    }
    prev = e.target.id
  }
  return (
    <div className="root-layout">
       <header>
          <div  className='logo'> 
              <Link to='/' className='logo-text'>Portfolio</Link>
          </div>
            <nav>
                <NavLink className="link" id='h' onClick={slide} to="">About</NavLink>
                <NavLink className="link" id='p' onClick={slide} to="project">Projects</NavLink>
                <NavLink className="link" id='c' onClick={slide} to="contact">Contact</NavLink>
                <div id='s'></div>
            </nav>
       </header>
       <main>
        
        <Outlet />
       </main>
    </div>
  )
}

export default RootLayout