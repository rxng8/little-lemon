import { Link } from "react-router-dom";

import './Footer.css'
import logo from '../../Assets/Logo.svg'

function Footer() {
  return (
    <footer>
      <div className="ActiveArea">
        <div id="Logo">
          <img src={logo}/>
        </div>
        <div id="LinkContainer">
          <div className="LinkColumn">
            <Link className="Link" to={'/'}>Link 1</Link>
            <Link className="Link" to={'/'}>Link 2</Link>
            <Link className="Link" to={'/'}>Link 3</Link>
            <Link className="Link" to={'/'}>Link 4</Link>
          </div>
          <div className="LinkColumn">
            <Link className="Link" to={'/'}>Link 1</Link>
            <Link className="Link" to={'/'}>Link 2</Link>
            <Link className="Link" to={'/'}>Link 3</Link>
            <Link className="Link" to={'/'}>Link 4</Link>
          </div>
          <div className="LinkColumn">
            <Link className="Link" to={'/'}>Link 1</Link>
            <Link className="Link" to={'/'}>Link 2</Link>
            <Link className="Link" to={'/'}>Link 3</Link>
            <Link className="Link" to={'/'}>Link 4</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
