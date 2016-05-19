import React from 'react';
import jQuery from 'jquery';
import Foundation from 'foundation-sites';


class Nav extends React.Component {

  componentDidMount() {
    $(this.compEl).foundation();
  }

  render() {
    return <ul className="nav-links" ref = {(compEl)=> this.compEl = compEl}>
            <li><a href="#about">About</a></li>
            <li><a href="#techs">Techs</a></li>
            <li><a href="#lab">Code Lab</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
  }
}

module.exports = Nav;
