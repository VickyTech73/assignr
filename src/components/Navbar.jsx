import "../assets/styles/Navbar.css";
import {
  FaHome,
  FaTasks,
  FaLightbulb,
  FaPhoneAlt,
  FaBell,
  FaUserCircle,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Logo / Brand */}
      <div className="logo-cont">
        <h1 className="logo-text">Assignr</h1>
      </div>

      {/* Main Nav Links */}
      <ul className="nav-links">
        <li>
          <NavLink to="/" className="nav-link">
            <FaHome className="icon" />
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/assignments" className="nav-link">
            <FaTasks className="icon" />
            Assignments
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className="nav-link">
            <FaLightbulb className="icon" />
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className="nav-link">
            <FaPhoneAlt className="icon" />
            Contact
          </NavLink>
        </li>
      </ul>

      {/* Profile & Notifications */}
      <div className="profile-section">
        <NavLink to="/notifications" className="icon-btn">
          <FaBell size={20} />
        </NavLink>
        <NavLink to="/profile" className="icon-btn">
          <FaUserCircle size={22} />
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
