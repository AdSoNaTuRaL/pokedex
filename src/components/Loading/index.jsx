import React from "react";
import { useTheme } from "../../contexts/Theme";
import loadingSpinner from "../../assets/pokeball_spinner.png";

import "./styles.css";

const Loading = () => {
  const { theme } = useTheme();

  return (
    <div className={`spinner-container ${theme}`}>
      <img className="spinner" src={loadingSpinner} alt="Loading Spinner" />
      <h1>text</h1>
    </div>
  );
};

export default Loading;
