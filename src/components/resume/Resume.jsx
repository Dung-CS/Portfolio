import React from "react";
import "./resume.css";
import Data from "./Data";
import Card from "./Card";

const Resume = () => {
  return (
    <section className="resume container section" id="resume">
      <h2 className="section_title">Achievements & Experience</h2>
      <div className="resume_container grid">
        <div className="timeline grid">
          {Data.map((val, index) => {
            if (val.category === "experience") {
              return (
                <Card
                  key={index}
                  icon={val.icon}
                  title={val.title}
                  year={val.year}
                />
              );
            }
          })}
        </div>
        <div className="timeline grid">
          {Data.map((val, index) => {
            if (val.category === "education") {
              return (
                <Card
                  key={index}
                  icon={val.icon}
                  title={val.title}
                  year={val.year}
                />
              );
            }
          })}
        </div>
      </div>
    </section>
  );
};

export default Resume;
