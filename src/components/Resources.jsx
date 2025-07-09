import "../assets/styles/Resources.css";
import { motion } from "framer-motion";

const Resources = () => {
  return (
    <motion.div
      className="resources-page"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="resources-title">Learning Resources</h1>
      <p className="resources-intro">
        Explore some trusted videos, websites, and YouTube channels to sharpen your HTML, CSS, and React skills.
      </p>

      <section className="resource-section">
        <h2>📺 YouTube Videos</h2>
        <ul>
            <li>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/UB1O30fR-EE?si=8HIdWWirFOFxGycN" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </li>
            <li>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/ESnrn1kAD4E?si=LGEy0nfWr-8NtJSL" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </li>
            <li>
              <iframe width="560" height="315" src="https://www.youtube.com/embed/hdI2bqOjy3c?si=esHdvnP4qxMsHfIz" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </li>

        </ul>
      </section>

      <section className="resource-section">
        <h2>🌐 Useful Websites</h2>
        <ul>
          <li><a rel="noreferrer" href="https://developer.mozilla.org/" target="_blank">MDN Web Docs</a> – Official HTML, CSS, JS references</li>
          <li><a rel="noreferrer" href="https://www.frontendmentor.io/" target="_blank">Frontend Mentor</a> – Real-world UI challenges</li>
          <li><a rel="noreferrer" href="https://freecodecamp.org/" target="_blank">freeCodeCamp</a> – Hands-on web dev curriculum</li>
        </ul>
      </section>

      <section className="resource-section">
        <h2>🎥 Recommended YouTube Channels</h2>
        <ul>
          <li><a rel="noreferrer" href="https://www.youtube.com/c/TraversyMedia" target="_blank">Traversy Media</a></li>
          <li><a rel="noreferrer" href="https://www.youtube.com/c/NetNinja" target="_blank">The Net Ninja</a></li>
          <li><a rel="noreferrer" href="https://www.youtube.com/c/SimplilearnOfficial" target="_blank">Simplilearn</a></li>
          <li><a rel="noreferrer" href="https://www.youtube.com/c/CodeWithHarry" target="_blank">CodeWithHarry</a> (especially if you're comfortable with Hindi)</li>
        </ul>
      </section>
    </motion.div>
  );
};

export default Resources;
