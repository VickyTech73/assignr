import "../assets/styles/UnderContruction.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const UnderContruction = () => {
  return (
    <motion.div
      className="under-construction"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <img
        src="https://media.giphy.com/media/l3vR9O2qPDTkw/giphy.gif"
        alt="Under Construction"
        className="construction-gif"
      />

      <h1>🚧 Page Under Construction</h1>
      <p>
        We're still working on this part of Assignr. Come back soon to see
        what's new!
      </p>

      <Link to="/" className="back-home-btn">
        <FaArrowLeft /> Back to Home
      </Link>
    </motion.div>
  );
};

export default UnderContruction;
