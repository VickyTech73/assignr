import { FaHome, FaTasks, FaFileUpload, FaUser, FaBookOpen } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "../assets/styles/SideBar.css";

const SideBar = () => {
  return (
    <nav className="side-bar">
      <ul className="sidebar-links">
        <li>
          <NavLink to="/" className="sidebar-link">
            <FaHome className="icon" /> Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink to="/assignments" className="sidebar-link">
            <FaTasks className="icon" /> Assignments
          </NavLink>
        </li>
        <li>
          <NavLink to="/upload" className="sidebar-link">
            <FaFileUpload className="icon" /> Upload Work
          </NavLink>
        </li>
        <li>
          <NavLink to="/resources" className="sidebar-link">
            <FaBookOpen className="icon" /> Resources
          </NavLink>
        </li>
        <li>
          <NavLink to="/profile" className="sidebar-link">
            <FaUser className="icon" /> Profile
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default SideBar;
