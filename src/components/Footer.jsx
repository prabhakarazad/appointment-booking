import React from "react";
import RightArrow from "../icons/RightArrow";

function Footer() {
  return (
    <div className="footer">
      <p className="footer-text">
        Powered By <span className="Appointo">Appointo</span>
      </p>
      <div className="footer-btn-container">
        <p className="footer-btn">Next</p>
        <RightArrow />
      </div>
    </div>
  );
}

export default React.memo(Footer);
