import React from 'react';
import './App.css';
import ThemeProvider from './contexts/Theme';
import Routes from './routes';

function App() {
  return (
    <ThemeProvider>
      <Routes />
    </ThemeProvider>
  );
}

export default App;
