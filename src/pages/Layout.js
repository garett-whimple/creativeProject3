import { Outlet, Link } from "react-router-dom";
import logo from "../media/stellarlogo.png"

const Layout = () => {
  return (
    <>
      <nav>
        <div class="nav-bar-container container">
              <div class="nav-bar-text-flex-container horizontal-container">
                  <div class="nav-bar-icon-container icon-container">
                      <a href="./index.html">
                          <img src={logo} width="200px"></img>
                      </a>
                  </div>
                  <div class="nav-bar-menu-container horizontal-container">
                      <div class="nav-bar-menu-item container">
                          <Link to="/">Home</Link>
                      </div>
                      <div class="nav-bar-menu-item container">
                          <Link to="/blogs">Locations</Link>
                      </div>
                      <div class="nav-bar-menu-item container">
                          <Link to="/contact">Booking</Link>
                      </div>
                  </div>
              </div>
        </div>
      </nav>
    
    <Outlet />
    </>
  )
};

export default Layout;