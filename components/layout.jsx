import React from 'react';
import Nav from './nav/component.jsx';
import About from './about/component.jsx';
import Gallery from './gallery/component.jsx';
import Contact from './contact/component.jsx';
import Offcanvas from './offcanvas/component.jsx';
import ReleaseList from './release-list/component';

class Layout extends React.Component {

  constructor(props){
    super(props);
    this.state = {offcanvasStatus:'closed'}
    this.openOffcanvas = this.openOffcanvas.bind(this);
  }

  openOffcanvas(){
    var status = (this.state.offcanvasStatus === 'closed')?'opened':'closed';
    this.setState({offcanvasStatus:status});
  }
  
  render() {
    return <div  className="crop" >
    <div className={'wrap ' + this.state.offcanvasStatus}>
      <Offcanvas />
      <div className="canvas">
        <nav className="nav-bar">
          <div className="nav-container">
            <a className="nav-btn" onClick={this.openOffcanvas}></a>
            <div className="nav-logo"></div>
            <Nav/>
          </div>
        </nav>
        <div className="content">
          <section>
            <About />
          </section>
          <section>
            <h1>Techs</h1>
            <Gallery />
          </section>
          <section>
            <Contact/>
          </section>
          <section>
            <ReleaseList name="react"/>
          </section>
        </div>
      </div>
    </div>
    </div>
  }
}

module.exports = Layout;
