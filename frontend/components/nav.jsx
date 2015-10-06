import React from 'react';

class Nav extends React.Component {
  render() {
    return <ul className="nav-links">
            <li><a>About</a></li>
            <li><a>Techs</a></li>
            <li><a>Twitter</a></li>
          </ul>
  }
}

module.exports = Nav;
