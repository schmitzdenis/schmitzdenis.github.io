import React from 'react';
import Nav from './nav/component.jsx';

class Layout extends React.Component {
  render() {
    return <div>
      <nav className="nav-bar">
        <div className="nav-container">
          <a className="nav-btn" onClick={this.openOffcanvas}></a>
          <div className="nav-logo"></div>
          <Nav/>
        </div>
      </nav>

      <div className="row content">
        {this.props.children}
      </div>

    </div>;
  }
}

module.exports = Layout;
