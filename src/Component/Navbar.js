import { NavLink } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => (
  <div className="container-nav">
    <nav className="navbar">
      <div>
        <h1> Math Magicians</h1>
      </div>
      <div className="Links" />
      <ul>
        <li><NavLink to="/Home" activeClassName="active">Home</NavLink></li>
        <li><NavLink to="/Calculator" activeClassName="active">Calculator</NavLink></li>
        <li>
          <NavLink to="/Quotes" activeClassName="active">
            Quotes
          </NavLink>
        </li>
      </ul>
    </nav>
  </div>
);

export default Navbar;
