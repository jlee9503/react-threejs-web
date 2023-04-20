import React from "react";
import "../styles/About.css";
import PageInfo from "../Data";

const About = () => {
  return (
    <div id="about">
      <div id="about-left"></div>

      <div id="about-right">
        {PageInfo.map((data) =>
          data.aboutText.map((info, idx) => (
            <div key={idx} className="bannerTxt">
              <h1 style={{ fontSize: "3rem" }}>{info.title}</h1>
              <h3 style={{ color: "#7f2930" }}>---{info.subtitle}</h3>
              <p>{info.desciption}</p>
              <button
                style={{ width: "25%", cursor: "pointer" }}
                className="learnMore-btn"
              >
                <a
                  href="#works"
                  style={{ textDecoration: "none", color: "#fff" }}
                >
                  See our works
                </a>
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default About;
