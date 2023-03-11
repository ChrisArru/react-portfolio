import React from "react";
import "./Footer.css";
import {
  faGithubAlt,
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <footer id="footer">
      <div class="container-fluid">
        <div class="social-icons mt-4">
          <a
            href="https://www.facebook.com/christian.arruzza/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a
            href="https://www.instagram.com/chrisarru/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a
            href="https://github.com/ChrisArru"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faGithubAlt} />
          </a>
          <a
            href="https://www.linkedin.com/in/christian-arruzza-23b240161/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
