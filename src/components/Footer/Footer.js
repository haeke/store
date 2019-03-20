import React from "react";

import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <ul className="footerNav">
        <li className="footerLogo">
          <div className="logoAndCopyright">
            <h4>StoreFront</h4>
            <h4>&copy; 2019 StoreFront All Rights Reserved</h4>
          </div>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
