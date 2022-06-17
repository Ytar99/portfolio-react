import React from 'react';
import './styles/Projects.scss';
import ui from './assets/ui.jpg';
import react from './assets/react.jpg';
import wd1 from './assets/wd1.jpg';
import wd2 from './assets/wd2.jpg';
import wd3 from './assets/wd3.jpg';
import wd4 from './assets/wd4.jpg';

const Projects = () => {
  return (
    <div className="projects">
      <div className="projects__section">
        <div className="card">
          <img src={ui} alt="" />
          <button>See Project</button>
        </div>
        <div className="card">
          <img src={react} alt="" />
          <button>See Project</button>
        </div>
        <div className="card">
          <img src={wd1} alt="" />
          <button>See Project</button>
        </div>
        <div className="card">
          <img src={wd2} alt="" />
          <button>See Project</button>
        </div>
        <div className="card">
          <img src={wd3} alt="" />
          <button>See Project</button>
        </div>
        <div className="card">
          <img src={wd4} alt="" />
          <button>See Project</button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
