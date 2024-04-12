import React, { useRef } from "react";
import "../styles/Contact.css";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();

  const sendemail = (e) => {
    console.log(form.name);
    e.preventDefault();
    emailjs
      .sendForm(
        "service_ly36zu9",
        "template_t4noh2h",
        form.current,
        "XzauxwPkEY88SBzwR"
      )
      .then(
        (result) => {
          // console.log(result.text);
          alert("Email has been sent");
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="contact">
      <h2>Contact Me</h2>
      <p>Please fill out the form below for any questions or opportunities</p>
      <form className="contactform" ref={form} onSubmit={sendemail}>
        <input
          type="name"
          className="name"
          placeholder="Your name..."
          name="name"
        />
        <input
          type="email"
          className="email"
          placeholder="Your email..."
          name="email"
        />
        <textarea
          className="message"
          name="message"
          rows="5"
          placeholder="Your message..."
        ></textarea>
        <button type="submit" value="Send" className="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contact;
