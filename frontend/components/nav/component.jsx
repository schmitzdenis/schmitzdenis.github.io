import React from 'react';

class Nav extends React.Component {
  render() {
    return <ul className="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#techs">Techs</a></li>
            <li><a href="#lab">Code Lab</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
  }
}

module.exports = Nav;
