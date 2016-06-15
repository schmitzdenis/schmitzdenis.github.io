import React from 'react';
import jQuery from 'jquery';
import Foundation from 'foundation-sites';
import {Link} from 'react-router';

class Nav extends React.Component {

  componentDidMount() {
    $(this.compEl).foundation();
  }

  render() {
    return <ul className="nav-links" ref = {(compEl)=> this.compEl = compEl}>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/release">Code Lab</Link></li>
            <li><Link to="/sandbox">Sandbox</Link></li>
          </ul>
  }
}

module.exports = Nav;
