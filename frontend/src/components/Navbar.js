import { Link, NavLink, Outlet } from "react-router-dom"

const Navbar = () => {
  return (
    
      <nav className="navbar">
          <div className="header">
              <div className="header-left">
                  <Link>
                    <img alt="BTC logo" className='logo' src={require('../images/BTClogo.png')}  />
                  </Link>

              </div>
              <div className="header-right" >       
                  <div className="header-top_nav">                   
                      <button className="donate_button"><i className="fa-solid fa-indian-rupee-sign"></i> DONATE</button>
                      <button className="login-button"><i className="fa-solid fa-user"></i> LOGIN/SIGN-UP</button>    
                  </div>
                  
                  <div className="header-bottom_nav">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="works">Works</NavLink>
                    <NavLink to="gallery">Gallery</NavLink>
                    <NavLink to="contact">Contact Us</NavLink>
                  </div>
              </div>
          </div>
          <main className="pagecontent">
            <Outlet />
          </main>
        </nav>
  )
}

export default Navbar