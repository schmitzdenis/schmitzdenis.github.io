import React from 'react';

class Contact extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      txt: 'Hello CodeApp!'
    };
  }

  update(event) {
    if(!event.target.value){
      return this.setState({
        'txt': 'Hello CodeApp!'
      });
    }
    this.setState({
      'txt': event.target.value
    });
  }

  render() {
    return <div>
        <h1>{this.state.txt}</h1>
        <fieldset className="input-group">
          <input placeholder="Email" type="text"></input>
          <input onChange={this.update.bind(this)} placeholder="Subject" type="text"></input>
          <textarea placeholder="Message Body" rows="20"></textarea>
        </fieldset>
      </div>
  }
}

module.exports = Contact;
