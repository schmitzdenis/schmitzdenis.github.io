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

  render() {
    let date = this._parseDate(this.props.infos.published_at);
    let body = this._parseMd(this.props.infos.body);
    return <li className="release_component accordion-item"
               data-accordion-item>
      <a  className="name accordion-title"
        href="#">
        {this.props.infos.tag_name} {date}
      </a>
      <div className="accordion-content"
        data-tab-content
        dangerouslySetInnerHTML={{__html: body}}>
      </div>
    </li>;
  }
}

export default Release;
