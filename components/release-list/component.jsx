'use strict';

import React from 'react';
import jQuery from 'jquery';
import Foundation from 'foundation-sites';
import Release from '../release/component';

$(document).foundation();

class ReleaseList extends React.Component {

  constructor() {
    super();
    let owner = 'facebook';
    let repo = 'react'
    this.apiUrl = `https://api.github.com/repos/${owner}/${repo}/releases`;
    this.state = {
      releases: []
    }
  }

  _parseReleases(results) {
    return results.map((item) => <Release key={item.tag_name} infos={item}/>);
  }

  render() {
    return <div>
      <h1>React releases</h1>
      {this.state.releases}
    </div>
  }

  componentDidMount() {
    this.serverRequest = $.get(this.apiUrl, (results) => {
      let list = this._parseReleases(results);
      this.setState({releases: list});
    });
  }

  componentWillUnmount() {
    this.serverRequest.abort();
  }
}

export default ReleaseList;
