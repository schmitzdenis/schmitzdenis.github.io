import React from 'react';

class Contact extends React.Component {

  constructor(props) {
    super(props);
    this.commentInput = null;
    this.state = {
      txt: 'Hello CodeApp!',
      comments:[]
    };
    this._update = this._update.bind(this);
    this._submit = this._submit.bind(this);

  }

  _update(event) {
    if(!event.target.value){
      return this.setState({
        'txt': 'Hello CodeApp!'
      });
    }
    this.setState({
      'txt': `From ${event.target.value}`
    });
  }

  _submit(e){
    e.preventDefault();
    if(this.commentInput.value){
      let newComment =  {body:this.commentInput.value};
      let comments = [newComment].concat(this.state.comments);
      this.setState({comments:comments});
    }
  }

  render() {
    return <div>
        <h1>{this.state.txt}</h1>
        <form onSubmit={this._submit}>
          <fieldset className="input-group">
            <input type="text"
              onChange={this._update}
              placeholder="Your name"/>
            <textarea
              ref={(textarea) => this.commentInput = textarea}
              placeholder="Your Comment"
              rows="4"/>

          </fieldset>
          <input type="submit" value="POST"/>
        </form>
      </div>
  }
}

module.exports = Contact;
