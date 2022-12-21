import { NavLink, Outlet } from "react-router-dom"

const RootLayout = () => {
  return (
    <div className='root-layout'>
        <header>
            <nav>
                <h1>BTC</h1>
                <NavLink to="/">Home</NavLink>
                <NavLink to="works">Works</NavLink>
                <NavLink to="gallery">Gallery</NavLink>
                <NavLink to="contact">Contact Us</NavLink>
            </nav>
        </header>
        <main>
          <Outlet />
        </main>
    </div>
  )
}

export default RootLayout