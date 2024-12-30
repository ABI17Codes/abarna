import "./intro.css";

import { FaAward } from "react-icons/fa";
import React from "react";
import { VscFolderLibrary } from "react-icons/vsc";
import img from "../../assets/abarna.jpg";

const Intro = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={img} alt="Abarna K" />
          </div>
        </div>
        <div className="about__content">
          {/* <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>5+ year</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>32+ Completed Projects</small>
            </article>
          </div> */}
          <p>
            I am a proactive and dedicated Bachelor of Engineering (ECE) student
            with a strong academic background and practical experience in
            digital electronics and programming.
            <br />
            - My passion for learning and adaptability has driven me to complete
            projects such as a Wireless Notice Board and a Student Dropout
            system. With certifications in Python programming and Digital System
            Design using Verilog, I am proficient in tools like Vivado,
            Microwind, and Xilinx.
            <br />
            - I am also an active participant in extracurricular activities,
            showcasing creativity, teamwork, and leadership skills. I aim to
            contribute effectively to organizational growth while continuously
            enhancing my skills.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default Intro;
