import React from "react";
import "./footer.css";

const Footer = () => {
  const getCurrentYear = () => {
    const currentDate = new Date(); // Get the current date
    return currentDate.getFullYear(); // Extract the full year
  };

  return (
    <footer>
      <a href="#home" className="footer__logo">
        ABARNA K
      </a>
      <ul className="permalinks">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Skills</a>
        </li>
        <li>
          <a href="#portfolio">Certification</a>
        </li>
        <li>
          <a href="#testimonials">Project</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer__copyright">
        <small>
          &copy; ABARNA K <span>{getCurrentYear()}</span>. All rights reserved.
        </small>
      </div>
    </footer>
  );
};

export default Footer;
