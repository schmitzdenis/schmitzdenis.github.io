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
      releases: []
    }
  }

  _setActive(id){
    var updatedReleases = this.state.releases.map((item)=> {
      item.isActive = (item.tag_name === id)?true:false;
      return item;
    });
    this.setState({releases:updatedReleases});
  }

  _getListComponents(items) {
    return items.map((item) => <Release key={item.tag_name}
    infos={item}
    setActive={this._setActive.bind(this)}
    isActive = {item.isActive||false}
    />);
  }
  componentDidUpdate() {
    //$('#releases').foundation();
    $(this.compEl).foundation();

  }
  render() {
    let releasesComponents = this._getListComponents(this.state.releases);
    return <div id="releases" class="release_list_component" ref={(compEl) => this.compEl = compEl}>
      <h1>React releases</h1>
      <ul>
        {releasesComponents}
      </ul>
    </div>
  }

  componentDidMount() {
    this.serverRequest = $.get(this.apiUrl, (results) => {
      this.setState({releases: results});
    });
  }

  componentWillUnmount() {
    this.serverRequest.abort();
  }
}

export default ReleaseList;
