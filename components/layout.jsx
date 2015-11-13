import React from 'react';
import Nav from './nav/component';
import About from './about/component';
import Gallery from './gallery/component';
import Contact from './Contact/component';
import Offcanvas from './offcanvas/component';

class Layout extends React.Component {

  constructor(props){
    super(props);
    this.state = {offcanvasStatus:'closed'}
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
            <a className="nav-btn" onClick={this.openOffcanvas.bind(this)}></a>
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
        </div>
      </div>
    </div>
    </div>
  }
}

module.exports = Layout;
