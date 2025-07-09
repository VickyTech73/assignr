import "../assets/styles/Home.css";
import { motion } from "framer-motion";
import { FaTasks, FaUpload } from "react-icons/fa";
import { Link } from "react-router-dom";

const latestAssignments = [
  {
    title: "Profile Card",
    description: "Create a responsive personal profile card using HTML and CSS.",
    link: "/assignments/profile-card",
  },
  {
    title: "Landing Page",
    description: "Design a landing page layout using flexbox or grid.",
    link: "/assignments/landing-page",
  },
  {
    title: "Navbar Challenge",
    description: "Build a styled navbar with active and hover states.",
    link: "/assignments/navbar",
  },
];

const Home = () => {
  return (
    <motion.div
      className="home"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <section className="welcome-section">
        <h1 className="home-title">
          Welcome to <span className="highlight">Assignr</span>
        </h1>
        <p className="home-subtitle">
          Your personal hub for web development assignments, submissions, and
          progress tracking.
        </p>

        <div className="cta-buttons">
          <Link to="/assignments" className="btn btn-primary">
            <FaTasks className="btn-icon" />
            View Assignments
          </Link>
          <Link to="/upload" className="btn btn-secondary">
            <FaUpload className="btn-icon" />
            Upload Work
          </Link>
        </div>
      </section>

      <section className="latest-section">
        <h2 className="latest-heading">Latest Assignments</h2>
        <div className="latest-list">
          {latestAssignments.map((item, i) => (
            <motion.div
              key={i}
              className="latest-card"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <Link to={item.link} className="card-link">
                View
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </motion.div>
  );
};

export default Home;
