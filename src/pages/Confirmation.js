import React, { useEffect } from "react";
import "../styles/Confirmation.css";

function Confirmation() {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <div className="confirmation">
      <h2>Message Sent!</h2>
      <p>
        Your message has been sent. Thank you for contacting me, I will reach
        back at my earliest convenience
      </p>
      <p className="confirmation-links">
        You can click{" "}
        <a className="confirmation-home" href="/home">
          here
        </a>{" "}
        to return to home page, or click{" "}
        <a className="confirmation-contact" href="/contact">
          here
        </a>{" "}
        to send another message.
      </p>
    </div>
  );
}

export default Confirmation;
