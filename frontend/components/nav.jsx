import React from 'react';

class Nav extends React.Component {
  render() {
    return <ul className="nav-links">
            <li><a href="#">About</a></li>
            <li><a href="#">Techs</a></li>
            <li><a href="#">Twitter</a></li>
          </ul>
  }
}

module.exports = Nav;
