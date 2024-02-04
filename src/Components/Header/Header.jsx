import { Outlet, Link } from "react-router-dom";

import './Header.css'
import logo from '../../Assets/Logo.svg'

function Header() {
  return (
    <header>
      <div id="Header">
        <div className="ActiveArea">
          <img src={logo}/>
          <nav>
            <Link to={`/`} className="NavItem">Home</Link>
            <Link to={`/booking`} className="NavItem">About</Link>
            <Link to={`/`} className="NavItem">Menu</Link>
            <Link to={`/`} className="NavItem">Reservation</Link>
            <Link to={`/`} className="NavItem">Order online</Link>
            <Link to={`/`} className="NavItem">Login</Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
