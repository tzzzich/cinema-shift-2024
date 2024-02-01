
import './Header.css'
import React from 'react';

const Header = () => {
    return (
        <header className="header">
        <div className="header__left">
          <img
            src="src/assets/kino.svg"
            alt="Logo"
            className="header__logo"
          />
          <div className="header__option" href="/">Профиль</div>
          <div className="header__option" href="/">Билеты</div>
        </div>
        <div className="header__right">
         <div className="header__option" href="/">Выйти</div>
        </div>
      </header>
    );
  };

export default Header;
