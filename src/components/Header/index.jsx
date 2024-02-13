import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1>Site</h1>
      <nav>
        <ul>
          {/* Використовуємо Link замість а  з пропом to замість href */}
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/login'>Go to Login</Link>
          </li>
          <li>
            <Link to='/hook'>Go</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
