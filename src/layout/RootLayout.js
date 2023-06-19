import { NavLink, Outlet } from 'react-router-dom'
import { ThemeContext } from '../lib/ThemeContext';
function RootLayout() {
  let prev = 'h'
  const slide = (e) => {
    let mobile = false;
    const bodySize = document.body.clientWidth;
    if(bodySize <= 397){
      mobile = true;
      document.getElementById("s").style.width = "50px";
    }else{
      document.getElementById("s").style.width = "70px";
    }
    if(prev === 'h') {
      switch (e.target.id) {
        //Do Nothing
        case 'h':
          break;
        case 'p':
          if(mobile){
            document.getElementById("s").style.right = "65px";
          }else{
            document.getElementById("s").style.right = "85px";
          }
          break;
        case 'c':
          if(mobile){
            document.getElementById("s").style.right = "15px";
          }else{
            document.getElementById("s").style.right = "18px";
          }
          break;
        default:
          break;
      }
    }
    else if(prev === "p"){
      switch (e.target.id) {
        case 'h':
        if(mobile){
          document.getElementById("s").style.right = "115px";
        }else{
          document.getElementById("s").style.right = "165px";
        }
          break;
        case 'p':
          //Do nothing
          break;
        case 'c':
          if(mobile){
            document.getElementById("s").style.right = "15px";
          }else{
            document.getElementById("s").style.right = "18px";
          }
          break;
        default:
          break;
      }
    }else{
      switch (e.target.id) {
        case 'h':
          if(mobile){
            document.getElementById("s").style.right = "115px";
          }else{
            document.getElementById("s").style.right = "165px";
          }
          break;
        case 'p':
          if(mobile){
            document.getElementById("s").style.right = "65px";
          }else{
            document.getElementById("s").style.right = "85px";
          }
          break;
        case 'c':
          //Do nothing
          break;
        default:
          break;
      }
    }
    prev = e.target.id
  }
  return (
    <ThemeContext.Consumer>{(context) => {
      const {toogleTheme, isLightTheme, light, dark } = context
      const theme = isLightTheme ? light: dark;
      return(
        <div className="root-layout">
        <header>
          <div  className='logo' onClick={toogleTheme}> 
              <h1 style={{color:theme.projectColor}} className='logo-text'>
                {!isLightTheme && <i className="fa-solid fa-moon"></i>}
                -Portfolio- 
                {isLightTheme && <i className="fa-regular fa-sun"></i>}
              </h1>
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
    }</ThemeContext.Consumer>
  )
}

export default RootLayout