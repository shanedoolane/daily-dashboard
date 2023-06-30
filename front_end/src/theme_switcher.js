import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

const ThemeSwitcher = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark-mode');
  };

  return (
    <div className="text-center py-4">
      <Button variant="primary" onClick={toggleDarkMode}>
        {isDarkMode ? 'Light Mode' : 'Dark Mode'}
      </Button>
    </div>
  );
};

export default ThemeSwitcher;