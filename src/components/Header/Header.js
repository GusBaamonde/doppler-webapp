import React from 'react';
import HeaderNav from './HeaderNav/HeaderNav';
import './Header.css';

const Header = (props) => {
  return (
    <header>
      <HeaderNav user={props.user} />
    </header>
  );
};

export default Header;
