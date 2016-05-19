import React from 'react';
import Nav from './nav/component.jsx';
import About from './about/component.jsx';
import Gallery from './gallery/component.jsx';
import Contact from './contact/component.jsx';
import ReleaseList from './release-list/component';

class Layout extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      offcanvasStatus: 'closed'
    }
  }

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
        <section>
          <About/>
        </section>
        <section>
          <h1>Techs</h1>
          <Gallery/>
        </section>
        <section>
          <Contact/>
        </section>
        <section>
          <ReleaseList name="react"/>
        </section>
      </div>
    </div>
  }
}

module.exports = Layout;
