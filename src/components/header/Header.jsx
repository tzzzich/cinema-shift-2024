
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <header className="header">
        <div className="header__left">
          <Link to="/"><img
            src="src/assets/kino.svg"
            alt="Logo"
            className="header__logo"
          /></Link>
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
