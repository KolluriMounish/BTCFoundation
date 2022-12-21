// import {  NavLink } from "react-router-dom"

export const Footer = () => {
  return (
    <div>
        <footer>
            <div className="footer">
                <div className="footer-container">
                    <div className="footer-bottom_nav">
                        
                        <ul>
                            <li><a href="#home">Home</a></li>
                            <li><a href="#news">Our Works</a></li>
                            <li><a href="#contact">Media</a></li>
                            <li><a href="#about">Contact Us</a></li>
                        </ul>
                    </div>
                    <div className="socials">
                        <ul>
                            <li><i className="fa-brands fa-facebook-f"></i></li>
                            <li><i className="fa-brands fa-twitter"></i></li>
                            <li><i className="fa-brands fa-instagram"></i></li>
                            <li><i className="fa-brands fa-youtube"></i></li>
                            <li><i className="fa-brands fa-linkedin-in"></i></li>
                        </ul>
                        
                    </div>
                    <div className="footer-bottom">
                        <p><span>&copy;</span> 2022 BTC - Be The Change Foundation | Design By - <a href="/"> Kolluri Mounish</a> </p>
                    </div> 
                </div>
            </div>
        </footer>
    </div>
  )
}
