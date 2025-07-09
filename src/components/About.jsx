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
        <p>
        Assignr was built to make it easier for new developers to learn by doing — not just watching tutorials. By giving them structured tasks, links, and a simple submission workflow, Assignr aims to be a starting point for better practice.
        </p>
      </section>

      <section className="about-section founder-section">
        <h2>👤 About the Founder</h2>
        <p>
          Hey there! I'm <strong>Victor Agbozo</strong>, a passionate web developer and Computer Science student from Ghana.
          I created Assignr to help fellow learners practice HTML, CSS, and JavaScript in a structured, practical way — because I know how tough it can be starting out.
        </p>
        <p>
          I'm self-taught, still learning every day, and I built Assignr for people like you — the curious, the stuck, the improving.
          Whether you're working on your first project or just need guided tasks, this platform is for you.
        </p>
        <p>
          Assignr is just the beginning — stay tuned for more features, community support, and dev tools to help you grow.
        </p>
      </section>


      <footer className="about-footer">
        Built with 💜 by Victor Horlanyo Agbozo for learners like you.
        <p className="version">&copy; Copyright 2025 Assignr MVP — v1.0.0</p>
      </footer>
    </motion.div>
  );
};

export default About;
