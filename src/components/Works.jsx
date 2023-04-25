import React from "react";
import "../styles/Works.css";
import PageInfo from "../Data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Works = () => {
  return (
    <>
      <div id="works-container">
        <h1 style={{ fontSize: "3rem" }}>Our Services</h1>
        <div id="works">
          {PageInfo.map((info) =>
            info.workItems.map((item) => (
              <div
                key={item.id}
                id={"workItem" + item.id.toString()}
                className="workItem"
              >
                <div style={{ textAlign: "center", color: "#5459a7" }}>
                  <FontAwesomeIcon icon={item.itemImg} size={"xl"} />
                </div>
                <h2 id="item-title">{item.title}</h2>
                <p id="item-desc">{item.desciption}</p>
                <div style={{ textAlign: "center" }}>
                  <button id="readMore-btn">Read More</button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default Works;
