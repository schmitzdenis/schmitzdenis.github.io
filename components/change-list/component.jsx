import jQuery from 'jquery';
import React from 'react';

export default class ChangeList extends React.Component {

  constructor() {
    super();
    this.apiUrl = `/api/`;
    this.state = {
      "changes":[]
    };
  }

  componentDidMount() {
    this.serverRequest = $.get(this.apiUrl, (changes) => {
      this.setState({'changes': changes});
    });
  }

  componentWillUnmount() {
    this.serverRequest.abort();
  }

  render() {
    return(
      <div>
          {this.state.changes.map((change)=> <div key={change.id}> {change.infos.title} {change.infos.name}</div>)}
      </div>
    );
  }
}
