import React from 'react';

class Tech extends React.Component {
  render() {
    return <li className="tech_component">
      <div className="tech">
        <div className="flipper">
          <div className="front">
            <div className="image" style={{
              backgroundImage: 'url(' + this.props.data.image + ')'
            }}></div>
          </div>
          <div className="back">
            <div className="title">
              <h3>{this.props.data.name}</h3>
            </div>
            <div className="description">
              <p>{this.props.data.description}</p>
            </div>
          </div>
        </div>
      </div>
    </li>
  }
}
module.exports = Tech;
