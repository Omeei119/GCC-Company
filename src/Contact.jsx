import React from 'react';
import "./App.css";

const Contact = () => (
  <section className="contact-section">
    <h2>Contact Us</h2>
    <p className="contact-subtext">Have questions or want to know more? Drop us a message!</p>
  
    <form className="contact-form">
      <input type="text" name="name" placeholder="Your Name" required />
      <input type="email" name="email" placeholder="Your Email" required />
      <textarea name="message" rows="5" placeholder="Your Message or Description..." required></textarea>
      <button type="submit">Submit</button>
    </form>
  </section>
);

export default Contact;