import "../assets/styles/About.css";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      className="about"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="about-title">About Assignr</h1>
      <p className="about-intro">
        <strong>Assignr</strong> is a lightweight assignment management tool designed
        to help students practice HTML, CSS, JavaScript, and React by completing
        real-world style challenges. It’s a learning space where tasks are clear,
        progress is visible, and creativity is encouraged.
      </p>

      <section className="about-section">
        <h2>🎯 Purpose</h2>
        <p>
          Assignr was created to bridge the gap between theory and practice. Instead of
          only reading about web development, learners can build small but meaningful
          projects that simulate real-life developer tasks.
        </p>
      </section>

      <section className="about-section">
        <h2>👥 Who It’s For</h2>
        <ul>
          <li>👩‍💻 Beginners learning frontend development</li>
          <li>📚 Students practicing for school or bootcamps</li>
          <li>🚀 Devs building a personal portfolio</li>
          <li>🧠 Anyone who wants guided hands-on learning</li>
        </ul>
      </section>

      <section className="about-section">
        <h2>💡 What Makes It Different?</h2>
        <p>
          Assignr is focused, minimal, and personalized. There’s no login wall (yet), no
          unnecessary features — just straightforward challenges, friendly design, and
          space to grow at your own pace.
        </p>
      </section>

      <footer className="about-footer">
        Built with 💜 by Victor for learners like you.
      </footer>
    </motion.div>
  );
};

export default About;
