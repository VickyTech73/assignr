import "../assets/styles/Contact.css";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.div
      className="contact"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="contact-title">Get in Touch</h1>
      <p className="contact-subtitle">
        Have a question, suggestion, or want to request an assignment? Drop a message!
      </p>

      <form className="contact-form" action={"mailto:agbozovictor73@gmail.com"}>
        <div className="form-group">
          <label htmlFor="name">Your Name</label>
          <input type="text" id="name" placeholder="Enter your name" required />
        </div>

        <div className="form-group">
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" placeholder="Enter your email" required />
        </div>

        <div className="form-group">
          <label htmlFor="message">Your Message</label>
          <textarea id="message" rows="5" placeholder="What's on your mind?" required></textarea>
        </div>

        <button type="submit" className="submit-btn">Send Message</button>
      </form>
    </motion.div>
  );
};

export default Contact;
