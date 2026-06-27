import React from "react";
import "./about.css";
import about from "../assets/avatar-2.png";
import AboutBox from "./AboutBox";

const About = () => {
  return (
    <section className="about container section" id="about">
      <h2 className="section_title">About Me</h2>
      <div className="about_container grid">
        <img src={about} alt="" className="about_img" width="180px"></img>
        <div className="about_data grid">
          <div className="about_info">
            <p className="about_description">
              I'm Pham Ngoc Phuong Dung, nickname Selena. I'm an international
              student. My home country is Vietnam. My major is CSC, and I'm
              NTU's year 1 student.
            </p>
            <a href="#resume" className="btn">
              Achievements
            </a>
          </div>
          <div className="about_skills grid">
            <div className="skills_data">
              <div className="skills_title">
                <h3 className="skills_name">Python</h3>
                <span className="skills_level ">Upper Intermediate</span>
              </div>
              <div className="skills_bar">
                <span className="skills_percentage python"></span>
              </div>
            </div>

            <div className="skills_data">
              <div className="skills_title">
                <h3 className="skills_name">ReactJS</h3>
                <span className="skills_level">Intermediate</span>
              </div>
              <div className="skills_bar">
                <span className="skills_percentage react"></span>
              </div>
            </div>

            <div className="skills_data">
              <div className="skills_title">
                <h3 className="skills_name">C++</h3>
                <span className="skills_level">Intermediate</span>
              </div>
              <div className="skills_bar">
                <span className="skills_percentage cpp"></span>
              </div>
            </div>

            <div className="skills_data">
              <div className="skills_title">
                <h3 className="skills_name">HTML & CSS</h3>
                <span className="skills_level">Upper Intermediate</span>
              </div>
              <div className="skills_bar">
                <span className="skills_percentage html"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AboutBox />
    </section>
  );
};

export default About;
