import React from 'react';
import ChangeList from '../change-list/component';

export default class ReleaseView extends React.Component {

  render() {
    return(
      <div>
        <h1>React releases</h1>
        <ChangeList/>
      </div>
    );
  }
}
