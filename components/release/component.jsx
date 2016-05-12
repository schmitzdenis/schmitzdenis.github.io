'use strict';

import React from 'react';
import Moment from 'moment';
import Marked from 'marked';

class Release extends React.Component{

  constructor(){
    super();
  }

  _parseDate(published_at){
    return Moment(published_at).fromNow();
  }

  _parseMd(mdContent){
    return Marked(mdContent);
  }

  render(){
    let date  = this._parseDate(this.props.infos.published_at);
    let body = this._parseMd(this.props.infos.body);

    return <div class="release_component">
      <h2 class="name" >{this.props.infos.tag_name} </h2>
      <strong class="date">{date}</strong>
      <a class="button" href={this.props.infos.url}>more</a>
      <p dangerouslySetInnerHTML={{__html:body}}></p>
    </div>;
  }
}

export default Release;
