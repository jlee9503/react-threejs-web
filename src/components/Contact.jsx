import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "../styles/Contact.css";
import MapChart from "./Map";

const Contact = () => {
  const form = useRef();
  const [emailSuccess, setEmailSuccess] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_sw6etjd",
        "template_v1tjrdf",
        form.current,
        "w7x3sf1cnSLHNvRAZ"
      )
      .then(
        (result) => {
          console.log(result.text);
          setEmailSuccess(true);
        },
        (error) => {
          console.log(error.text);
          setEmailSuccess(false);
        }
      );
  };

  return (
    <div id="contact">
      <form ref={form} id="contact-info" onSubmit={handleSubmit}>
        <h1 style={{ fontSize: "3rem", width: "100%" }}>Contact Us</h1>
        <input
          id="name"
          name="name"
          className="input-field"
          placeholder="Full Name"
        />
        <input
          id="email"
          name="email"
          className="input-field"
          placeholder="Email Address"
        />
        <input
          id="subject"
          name="subject"
          className="input-field"
          placeholder="Subject"
        />
        <textarea
          id="message"
          name="message"
          placeholder="Your Message..."
          className="input-field"
          rows={10}
          cols={50}
        />
        <button type="submit" id="sendMsg-btn">
          Send Message
        </button>
        <div id="statusMsg">{emailSuccess && `Your message has been sent. We'll reach out to you soon.`}</div>
      </form>
      <div id="contact-location">
        <MapChart />
      </div>
    </div>
  );
};

export default Contact;
