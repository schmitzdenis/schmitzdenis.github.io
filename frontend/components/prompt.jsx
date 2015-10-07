import React from 'react';

class Prompt extends React.Component {

  constructor(props){
    super(props);
    this.state = {txt:'prompt:codeapp$>'};
  }

  update(event){
    this.setState({'txt':event.target.value});
  }

  render() {
    return <div>
            <h2>Email {this.state.txt}</h2>
            <fieldset className="input-group">
              <input type="text" placeholder="Email"></input>
              <input type="text" placeholder="Subject" onChange={this.update.bind(this)}></input>
              <textarea placeholder="Message Body" rows="20" ></textarea>
            </fieldset>
          </div>
  }
}

module.exports = Prompt;
