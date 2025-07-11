import "../assets/styles/Assignments.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaSearch } from "react-icons/fa";

const assignmentsData = [
  {
    id: 1,
    title: "Personal Profile Card",
    description: "Create a personal profile card using HTML and CSS.",
    link: "/assignments/profile-card",
    tags: ["html", "css"],
  },
  {
    id: 2,
    title: "Responsive Navbar",
    description: "Build a responsive navbar with dropdowns.",
    link: "/assignments/navbar.zip",
    tags: ["html", "css", "responsive"],
  },
  // Add more assignments here
];

const Assignments = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filtered = assignmentsData.filter(
    (assignment) =>
      assignment.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      assignment.tags.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase())
      )
  );

  return (
    <motion.div
      className="assignments"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="search-bar-wrapper">
        <FaSearch className="search-icon" color="#4B3F72" />
        <input
          type="text"
          placeholder="Search assignments..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="assignment-grid">
        {filtered.length > 0 ? (
          filtered.map((assignment) => (
            <motion.div
              key={assignment.id}
              className="assignment-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <h2 className="assignment-title">{assignment.title}</h2>
              <p className="assignment-desc">{assignment.description}</p>
              <Link to={assignment.link} className="viewLink">
                View Assignment
              </Link>
            </motion.div>
          ))
        ) : (
          <p className="no-results">No matching assignments found.</p>
        )}
      </div>
    </motion.div>
  );
};

export default Assignments;
