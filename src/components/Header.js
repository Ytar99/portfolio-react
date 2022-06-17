import React, { useState } from 'react';
import { MenuOutlined, Close } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import './styles/Header.scss';

const Header = () => {
  const [active, setActive] = useState(false);

  const showMenu = () => {
    setActive(true);
  };

  return (
    <div className="header">
      <div className="header__logo">
        <h1>Ytar</h1>
      </div>
      <nav
        className={
          active ? 'header__navbar active' : 'header__navbar'
        }
      >
        <ul className="ul-items">
          <div className="closed">
            <Close
              className="close"
              onClick={() => setActive(false)}
            />
          </div>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="#">About</Link>
          </li>
          <li>
            <Link to="#">Portfolio</Link>
          </li>
          <li>
            <Link to="#">Pages</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <div className="changer">
        <MenuOutlined
          className="menu"
          onClick={() => setActive(true)}
        />
      </div>
    </div>
  );
};

export default Header;
