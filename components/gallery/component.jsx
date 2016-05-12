import React from 'react';
import Tech from '../tech/component.jsx';

class Gallery extends React.Component {

  constructor(props){
    super(props); // A constructor can use the super keyword to call the constructor of a parent class. Here we construct a React.Component
    var techsMap = [
      {
        key:1,
        name: 'React',
        image: require ('../../images/techs/react.svg'),
        description: 'Lots of people use React as the V in MVC. Since React makes no assumptions about the rest of your technology stack, it\'s easy to try it out on a small feature in an existing project.'
      },{
        key:2,
        name: 'Sass',
        image: require ('../../images/techs/sass.svg'),
        description: 'Sass is an extension of CSS3, adding nested rules, variables, mixins, selector inheritance, and more. It\'s translated to well-formatted, standard CSS using the command line tool or a web-framework plugin.'
      },{
        key:3,
        name: 'Susy',
        image: require ('../../images/techs/susy.svg'),
        description: 'YOUR MARKUP, YOUR DESIGN, YOUR OPINIONS | OUR MATH.'
      },{
        key:4,
        name: 'Webpack',
        image: require ('../../images/techs/webpack.svg'),
        description: 'Lots of people use React as the V in MVC. Since React makes no assumptions about the rest of your technology stack, it\'s easy to try it out on a small feature in an existing project.'
      },{
        key:5,
        name: 'Node Js',
        image: require ('../../images/techs/nodejs.svg'),
        description: 'Sass is an extension of CSS3, adding nested rules, variables, mixins, selector inheritance, and more. It\'s translated to well-formatted, standard CSS using the command line tool or a web-framework plugin.'
      },{
        key:6,
        name: 'Express',
        image: require ('../../images/techs/express.png'),
        description: 'YOUR MARKUP, YOUR DESIGN, YOUR OPINIONS | OUR MATH.'
      },{
        key:7,
        name: 'Git',
        image: require ('../../images/techs/git.svg'),
        description: 'Lots of people use React as the V in MVC. Since React makes no assumptions about the rest of your technology stack, it\'s easy to try it out on a small feature in an existing project.'
      }
    ];

    this.state =  {  //getInitialState when not using React.createClass
      techs : techsMap
    };
  }

  render() {
    var techList = this.state.techs.map(function (tech) {
        return (
          <li key={tech.key}>
            <Tech data={tech}/>
          </li>
        );
    });

    return <ul className="tech-gallery">
            {techList}
          </ul>
  }
}

module.exports = Gallery;
