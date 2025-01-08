import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section id="contact" className="Contact">
      <h2>Contact Me</h2>
      <p>Phone & WhatsApp: +2348085801912</p>
      <p>
        Email: <a href="mailto:v.ebukaagu@gmail.com">v.ebukaagu@gmail.com</a>
      </p>
      <form>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" required></textarea>

        <button type="submit">Send</button>
      </form>
    </section>
  );
};

export default Contact;
