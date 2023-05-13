import React, { Suspense } from "react";
import "../styles/Banner.css";
import PageInfo from "../Data";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

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
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </div>
          <div id="tool-btn">
            <a href="#contact" type="button" id="contact-btn">
              Get in touch
            </a>
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
          <Canvas>
            <Suspense fallback={null}>
              <OrbitControls enableZoom={false} />
              <ambientLight intensity={1} />
              <directionalLight position={[3, 2, 1]} />
              <Sphere args={[1, 100, 200]} scale={2.4}>
                <MeshDistortMaterial
                  color="#3d1c56"
                  attach="material"
                  distort={0.5}
                  speed={2}
                />
              </Sphere>
            </Suspense>
          </Canvas>
          <img src="./image/moon.png" alt="banner-img" className="banner-img" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
