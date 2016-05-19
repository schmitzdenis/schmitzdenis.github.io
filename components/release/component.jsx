'use strict';

import React from 'react';
import Moment from 'moment';
import Marked from 'marked';

class Release extends React.Component {

  constructor(props) {
    super(props);
    this._setActive = this._setActive.bind(this);
  }

  _parseDate(published_at) {
    return Moment(published_at).fromNow();
  }

  _parseMd(mdContent) {
    return Marked(mdContent);
  }

  _setActive(){
    this.props.setActive(this.props.infos.tag_name);
  }

  _bodyEl(body){
    let bodyParsed = this._parseMd(body);
    if(bodyParsed){
     return <div className="release_content"
       dangerouslySetInnerHTML={{__html: bodyParsed}}></div>;
    }
    return null;
  }

  _buttonEl(bodyEl){
    if(bodyEl){
      return <button onClick={this._setActive}>CHANGELOG</button>
    }
    return null;
  }

  render() {
    let date = this._parseDate(this.props.infos.published_at);
    let bodyEl = this._bodyEl(this.props.infos.body);
    let activeClass = (this.props.isActive)?'active':'idle';
    let button = this._buttonEl(bodyEl);

    return <li className={`release_component ${activeClass}`}>
      <a  className="name" href="#">
        {this.props.infos.tag_name} {date}
      </a>
      {button}
      {bodyEl}
    </li>;
  }
}

Release.propTypes = {
  infos: React.PropTypes.object,
  setActive: React.PropTypes.func,
  isActive:React.PropTypes.bool
};
Release.defaultProps = { isActive: false };

export default Release;
