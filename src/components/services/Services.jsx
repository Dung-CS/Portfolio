import React from "react";
import "./services.css";
import Image1 from "../assets/service-1.svg";
import Image2 from "../assets/service-2.svg";
import Image3 from "../assets/service-3.svg";

const data = [
  {
    id: 1,
    image: Image2,
    title: "Front-end Developer",
  },
  {
    id: 2,
    image: Image3,
    title: "Game Developer",
  },
  {
    id: 3,
    image: Image1,
    title: "Software Engineer",
  },
];

const Services = () => {
  return (
    <section className="service container services" id="services">
      <h2 className="section_title">Career Prospects</h2>
      <div className="services_container grid">
        {data.map(({ id, image, title }) => {
          return (
            <div className="services_card" key={id}>
              <img src={image} alt="" className="services_img" />
              <h3 className="services_title">{title}</h3>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
