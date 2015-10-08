import React from 'react';

class Tech extends React.Component {
  render() {
    return <div className="tech">
            <h3>{this.props.data.name}</h3>
            <p>{this.props.data.description}</p>
            <div className="image" style={{backgroundImage: this.props.data.image}}></div>
          </div>
  }
}

module.exports = Tech;
