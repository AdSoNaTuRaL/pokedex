import React from 'react';
import './styles.css';
import {useTheme, themes} from '../../contexts/Theme';
import sunIcon from '../../assets/icons/sun.png'
import moonIcon from '../../assets/icons/moon.png'

const ThemeBtn = () => {
  const { theme, setTheme } = useTheme();
  return (
      <button className="theme-switch" onClick={() => setTheme(theme === themes[1] ? themes[0] : themes[1])}>
        <img className="theme-icon" src={theme === themes[1] ? sunIcon : moonIcon} alt="Theme Icon"/>
      </button>
  );
}

export default ThemeBtn;