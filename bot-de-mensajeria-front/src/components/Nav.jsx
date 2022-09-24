import React from 'react';
import '../styles/Nav.css';

function Nav(props) {
  return (
    <nav>
      <ul className='nav-items'>{props.children}</ul>
    </nav>
  );
}

export default Nav;
