import React, { useEffect } from "react";
import "../styles/Error.css";

function Error() {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <div className="error">
      <h2>404 Error</h2>
      <p>Page Not Found</p>
    </div>
  );
}

export default Error;
