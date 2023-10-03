import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <button onClick={toggleMenu}>منو</button>
      {menuOpen && (
        <ul>
          <li><NavLink to='/' >Home</NavLink></li>
          <li><NavLink to='/projects' >Projects</NavLink></li>
          <li><NavLink to='/about' >About</NavLink></li>
        </ul>
      )}
    </div>
  );
}

export default App;
