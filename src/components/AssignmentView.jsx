import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaDownload, FaArrowLeft  } from "react-icons/fa";
import "../assets/styles/AssignmentView.css";

const assignmentData = {
  "profile-card": {
    title: "Profile Card",
    description: "Create a responsive personal profile card using HTML and CSS. The card should contain a profile picture, name, title, and social links.",
    instructions: [
      "Use flexbox or grid for layout.",
      "Add hover effects to buttons or links.",
      "Ensure mobile responsiveness.",
      "Include some personal or fictional details.",
    ],
    resources: [
      { name: "Example Card Design", url: "#" },
      { name: "CSS Flexbox Guide", url: "https://css-tricks.com/snippets/css/a-guide-to-flexbox/" }
    ],
    zipLink: "../assets/assignments-temp/HTML-CSS-ASS-1.zip",
  },
  "landing-page": {
    title: "Landing Page",
    decription: "Nothing here",
    instructions: [
      "Do not fail!"
    ],
    resources: [
      {name: "Example", url: "#"}
    ],
    zipLink: "../assets/assignments-temp/HTML-CSS-ASS-1.zip",
  }
  // Add more assignments here
};

const AssignmentView = () => {
  const { id } = useParams();
  const assignment = assignmentData[id];

  if (!assignment) {
    return (
      <div className="assignment-view">
        <h2>Assignment not found</h2>
        <Link to={"/assignments"}>Go back</Link>
      </div>
      );
  }

  return (
    <div className="container">

      <div className="back-btn-cont">
        <Link to="/assignments" className="back-btn">
            <FaArrowLeft className="back-icon" />
            Back
        </Link>
      </div>

      <motion.div
        className="assignment-view"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1>{assignment.title}</h1>
        <p className="description">{assignment.description}</p>

        <h3>Instructions</h3>
        <ul className="instructions">
          {assignment.instructions.map((step, i) => (
            <li key={i}>{step}</li>
          ))}
        </ul>

        <h3>Helpful Resources</h3>
        <ul className="resources">
          {assignment.resources.map((res, i) => (
            <li key={i}>
              <a href={res.url} target="_blank" rel="noopener noreferrer">
                {res.name}
              </a>
            </li>
          ))}
        </ul>
        <br />
        <a className="dLink" download href={assignment.zipLink}>
          <FaDownload className="dIcon" />
          Download Zip
        </a>
      </motion.div>
    </div>
  );
};

export default AssignmentView;
