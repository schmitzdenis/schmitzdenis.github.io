import React from 'react';

class Tech extends React.Component {
  render() {
    return <div>{this.props.data.name} {this.props.data.description}</div>
  }
}

module.exports = Tech;
