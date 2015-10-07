import React from 'react';
import Nav from './nav';
import Hello from './hello';
import Gallery from './gallery';
import Prompt from './prompt';

class Layout extends React.Component {
  render() {
    return<div>
      <nav className="nav-bar">
        <div className="nav-container">
          <div className="nav-logo"></div>
          <Nav/>
        </div>
      </nav>
      <div className="content">
        <section>
          <Hello />
        </section>
        <section>
          <h1>Techs</h1>
          <Gallery />
        </section>
        <section>
          <Prompt/>
        </section>
      </div>
    </div>
  }
}

module.exports = Layout;
