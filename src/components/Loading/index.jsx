import React from "react";
import { useTheme } from "../../contexts/Theme";
import loadingSpinner from "../../assets/pokeball_spinner.png";

import "./styles.css";

const Loading = () => {
  const { theme } = useTheme();

  return (
    <div className={`spinner-container ${theme}`}>
      <img className="spinner" src={loadingSpinner} alt="Loading Spinner" />
    </div>
  );
};

export default Loading;
