import jQuery from 'jquery';
import React from 'react';
import Matrix from './matrix/component';
import ReleaseList from'../release-list/component';

class Sandbox extends React.Component {

  render() {
    return(
      <div>
        <h1>Matrix Rotations</h1>
        <Matrix/>
        <h1>React releases</h1>
        <ReleaseList/>
      </div>
    );
  }
}

module.exports = Sandbox;
