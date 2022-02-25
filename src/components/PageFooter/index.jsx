import React from "react";
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";

import "./styles.css";

const PageFooter = () => {
  return (
    <footer>
      <span>{new Date().getFullYear()} | Adson Henrique</span>
      <div className="footer-links">
        <a
          href="https://www.linkedin.com/in/adsonhenrique/"
          rel="noreferrer noopener"
          target="_blank"
        >
          <FaLinkedin size={30} />
        </a>
        <a
          href="https://github.com/adsonatural"
          rel="noreferrer noopener"
          target="_blank"
        >
          <FaGithubSquare size={30} />
        </a>
      </div>
    </footer>
  );
};

export default PageFooter;
