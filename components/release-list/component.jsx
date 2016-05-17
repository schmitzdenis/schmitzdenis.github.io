'use strict';
import jQuery from 'jquery';
import Foundation from 'foundation-sites';
import React from 'react';
import Release from '../release/component';

class ReleaseList extends React.Component {

  constructor() {
    super();
    let owner = 'facebook';
    let repo = 'react'
    this.apiUrl = `https://api.github.com/repos/${owner}/${repo}/releases`;
    this.state = {
      releases: [],
      activeKey: null
    }
  }

  _isActive(id) {
    return (id === this.state.activeKey);
  }

  _parseReleases(results) {
    return results.map((item) => <Release key={item.tag_name} infos={item} isActive={this._isActive(item.tag_name)}/>);
  }
  componentDidUpdate(){
    $('#releases').foundation();
  }
  render() {
    return <div id="releases">
      <h1>React releases</h1>
      <ul className="accordion" data-accordion>
        {this.state.releases}
      </ul>
    </div>
  }

  componentDidMount() {
    this.serverRequest = $.get(this.apiUrl, (results) => {
      let list = this._parseReleases(results);
      this.setState({releases: list});
      this.setState({activeKey: results[0].tag_name});
    });
  }

  componentWillUnmount() {
    this.serverRequest.abort();
  }
}

export default ReleaseList;
