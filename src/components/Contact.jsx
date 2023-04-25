import React from "react";
import "../styles/Contact.css";
import MapChart from "./Map";

const Contact = () => {
  return (
    <div id="contact">
      <div id="contact-info">
        <h1 style={{ fontSize: "3rem" }}>Contact Us</h1>
        <input id="name" className="input-field" placeholder="Full Name" />
        <input
          id="email"
          className="input-field"
          placeholder="Email Address"
        />
        <input id="subject" className="input-field" placeholder="Subject" />
        <textarea
          id="message"
          placeholder="Your Message..."
          rows={10}
          cols={50}
        />
        <button id="sendMsg-btn">Send Message</button>
      </div>
      <div id="contact-location">
        <MapChart />
      </div>
    </div>
  );
};

export default Contact;
