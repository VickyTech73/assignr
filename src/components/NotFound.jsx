import "../assets/styles/NotFound.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const NotFound = () => {
  return (
    <motion.div
      className="not-found"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="code">404</h1>
      <p className="message">Oops! Page not found.</p>
      <p className="sub-message">The page you're looking for doesn't exist or has been moved.</p>
      <Link to="/" className="home-btn">Back to Home</Link>
    </motion.div>
  );
};

export default NotFound;
