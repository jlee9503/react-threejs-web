import React from "react";
import "../styles/Banner.css";
import PageInfo from "../Data";


const Banner = () => {
  return (
    <div id="banner">
      <div id="header">
        <div id="header-left">
          <div id="logo">
            <h2>THREE.js WEB</h2>
          </div>
          <div id="nav-links">
            <ul>
              {PageInfo.map((data, idx) =>
                data.navItems.map((item, num) => (
                  <li key={num}>
                    <a href={item.to} style={{ textDecoration: "none" }}>
                      {item.name}
                    </a>
                  </li>
                ))
              )}
            </ul>
          </div>
        </div>

        <div id="header-right">
          <div id="search-icon">
            {/* <FaSearch size={20} style={{ marginTop: "3px" }} /> */}
          </div>
          <div id="tool-btn">
            <button id="contact-btn">Get in touch</button>
          </div>
        </div>
      </div>

      <div id="main">
        <div id="main-left">
          {PageInfo.map((data) =>
            data.bannerInfo.map((info, idx) => (
              <div key={idx} className="bannerTxt">
                <h1 style={{ fontSize: "3rem" }}>{info.title}</h1>
                <h3 style={{ color: "#7f2930" }}>---{info.subtitle}</h3>
                <p>{info.desciption}</p>
                <button
                  style={{ width: "25%", cursor: "pointer" }}
                  className="learnMore-btn"
                >
                  Learn More
                </button>
              </div>
            ))
          )}
        </div>
        <div id="main-right">
          <img src="./image/moon.png" alt="banner-img" className="banner-img" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
