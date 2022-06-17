import React from 'react';
import './styles/Main.scss';
import {
  Twitter,
  Instagram,
  Facebook,
  LinkedIn,
  Pinterest,
} from '@mui/icons-material';
import man from './assets/man.png';

const Main = () => {
  return (
    <div className="main">
      <div className="main__container">
        <div className="main__content">
          <div className="main__content-text">
            <p>Hey there</p>
            <h1>I am Bob Russer</h1>
            <p>Create Art Director & Designer</p>
            <div className="main__content-icons">
              <Twitter className="main__content-icons-icon" />
              <Instagram className="main__content-icons-icon" />
              <Facebook className="main__content-icons-icon" />
              <LinkedIn className="main__content-icons-icon" />
              <Pinterest className="main__content-icons-icon" />
            </div>
            <div className="main__content-buttons">
              <button>See My Work</button>
              <button>Hire Me</button>
            </div>
          </div>
        </div>
        <div className="main__img">
          <img src={man} alt="happy man" />
        </div>
      </div>
    </div>
  );
};

export default Main;
