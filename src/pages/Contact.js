import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Contact.css";
import emailjs from "@emailjs/browser";

function Contact() {
  const formRef = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    const form = formRef.current;

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    // Validate fields
    if (!name) {
      alert("Please enter your name.");
      return;
    }
    if (!validateEmail(email)) {
      alert("Please enter a valid email address.");
      return;
    }
    if (!message) {
      alert("Please enter a message.");
      return;
    }

    setIsLoading(true);

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          form.reset();
          navigate("/contact/confirmation");
        },
        (error) => {
          console.error("Error sending email:", error.text);
          alert("An error occurred. Please try again.");
        }
      )
      .finally(() => setIsLoading(false));
  };

  return (
    <div className="contact">
      <h2>Contact Me</h2>
      <p>Please fill out the form below for any questions or opportunities</p>
      <form className="contactform" ref={formRef} onSubmit={sendEmail}>
        <input
          type="text"
          className="name"
          placeholder="Your name..."
          name="name"
          required
        />
        <input
          type="email"
          className="email"
          placeholder="Your email..."
          name="email"
          required
        />
        <textarea
          className="message"
          name="message"
          rows="5"
          placeholder="Your message..."
          required
        ></textarea>
        <button type="submit" className="submit" disabled={isLoading}>
          <span>{isLoading ? "Submitting..." : "Submit"}</span>
        </button>
      </form>
    </div>
  );
}

export default Contact;
