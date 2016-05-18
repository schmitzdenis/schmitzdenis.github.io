'use strict';

import React from 'react';
import Moment from 'moment';
import Marked from 'marked';

class Release extends React.Component {

  constructor() {
    super();
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

  render() {
    let date = this._parseDate(this.props.infos.published_at);
    let body = this._parseMd(this.props.infos.body);
    let activeClass = (this.props.isActive)?'active':'idle';

    return <li className={`release_component ${activeClass}`}>
      <a  className="name" href="#">
        {this.props.infos.tag_name} {date}
      </a>
      <button onClick={this._setActive.bind(this)}>CHANGELOG</button>
      <div className="release_content"
        dangerouslySetInnerHTML={{__html: body}}></div>
    </li>;
  }
}

// Release.getDefaultProps = {
//   isActive: false
// };

export default Release;
