import * as React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header id="headerContainer">
      <Link to="/">
        <h3>Viz</h3>
      </Link>
    </header>
  );
};

export default Header;
