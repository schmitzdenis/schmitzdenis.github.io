import React from 'react';
import Tech from './tech';


class Gallery extends React.Component {

  constructor(props){
    super(props); // A constructor can use the super keyword to call the constructor of a parent class. Here we construct a React.Component

    this.state =  {  //getInitialState when not using React.createClass
      techs : [
        {
          name: 'React',
          image: 'react.png',
          description: 'Lots of people use React as the V in MVC. Since React makes no assumptions about the rest of your technology stack, it\'s easy to try it out on a small feature in an existing project.'
        },{
          name: 'Sass',
          image: 'sass.png',
          description: 'Sass is an extension of CSS3, adding nested rules, variables, mixins, selector inheritance, and more. It\'s translated to well-formatted, standard CSS using the command line tool or a web-framework plugin.'
        },{
          name: 'Susy',
          image: 'susy.png',
          description: 'YOUR MARKUP, YOUR DESIGN, YOUR OPINIONS | OUR MATH.'
        }
      ]
    };
  }

//componentDidMount() {
  //Fetch techs from api and setState
  /*
   $.ajax({
     url: this.props.url,
     dataType: 'json',
     cache: false,
     success: function(data) {
       this.setState({data: data});
     }.bind(this),
     error: function(xhr, status, err) {
       console.error(this.props.url, status, err.toString());
     }.bind(this)
   });
   */
 //}

  render() {
    var techList = this.state.techs.map(function (tech) {
        return (
          <li>
            <Tech data={tech} />
          </li>
        );
    });

    return <ul className="tech-gallery">
            {{techList}}
          </ul>
  }
}

module.exports = Gallery;
