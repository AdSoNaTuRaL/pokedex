import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";

const PageHeader = () => {
  return (
    <>
      <nav className={`navbar`}>
        <Link to="/" className="home-page">
          Pokédex
        </Link>
      </nav>
    </>
  );
};

export default PageHeader;
