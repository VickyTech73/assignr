import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "../assets/styles/Assignments.css";

const assignments = [
  {
    title: "Profile Card",
    description: "Create a responsive personal profile card using HTML and CSS.",
    link: "/assignments/profile-card",
  },
  // {
  //   title: "Landing Page",
  //   description: "Build a simple landing page layout with a call-to-action.",
  //   link: "/assignments/landing-page",
  // },
  // {
  //   title: "Navigation Bar",
  //   description: "Design a navigation bar with hover and active states.",
  //   link: "/assignments/navbar",
  // },
];

const Assignments = () => {
  return (
    <motion.div
      className="assignments"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="assignments-title">Available Assignments</h1>
      <div className="assignment-list">
        {assignments.map((item, index) => (
          <motion.div
            className="assignment-card"
            key={index}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <Link to={item.link} className="assignment-link">View Assignment</Link>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Assignments;
