import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Contact Me</h1>
      <p>Email: <a href="mailto:Erik.h.werner@gmail.com" target="_blank" rel="noopener noreferrer">Erik.h.werner@gmail.com</a></p>
      <p>LinkedIn: <a href="https://www.linkedin.com/in/erik-werner-31a05814b/" target="_blank" rel="noopener noreferrer">https://www.linkedin.com/ErikWerner</a></p>
      <p>GitHub: <a href="https://github.com/engrabb" target="_blank" rel="noopener noreferrer">Github.com/engrabb</a></p>
    </div>
  );
};

export default Contact;