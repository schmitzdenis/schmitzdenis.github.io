import React from 'react';
import Tech from '../tech/component.jsx';

class Gallery extends React.Component {

  constructor(props) {
    super(props); // A constructor can use the super keyword to call the constructor of a parent class. Here we construct a React.Component
    var techsMap = [
      {
        key: 1,
        name: 'React',
        image: '/images/techs/react.svg',
        description: 'Lots of people use React as the V in MVC. Since React makes no assumptions about the rest of your technology stack, it\'s easy to try it out on a small feature in an existing project.'
      }, {
        key: 2,
        name: 'Sass',
        image: '/images/techs/sass.svg',
        description: 'Sass is an extension of CSS3, adding nested rules, variables, mixins, selector inheritance, and more. It\'s translated to well-formatted, standard CSS using the command line tool or a web-framework plugin.'
      }, {
        key: 3,
        name: 'PostGres',
        image: '/images/techs/postgres.svg',
        description: 'YOUR MARKUP, YOUR DESIGN, YOUR OPINIONS | OUR MATH.'
      }, {
        key: 4,
        name: 'Webpack',
        image: '/images/techs/webpack.svg',
        description: 'Lots of people use React as the V in MVC. Since React makes no assumptions about the rest of your technology stack, it\'s easy to try it out on a small feature in an existing project.'
      }, {
        key: 5,
        name: 'Node Js',
        image: '/images/techs/nodejs.svg',
        description: 'Sass is an extension of CSS3, adding nested rules, variables, mixins, selector inheritance, and more. It\'s translated to well-formatted, standard CSS using the command line tool or a web-framework plugin.'
      }, {
        key: 6,
        name: 'Express',
        image: '/images/techs/express.png',
        description: 'YOUR MARKUP, YOUR DESIGN, YOUR OPINIONS | OUR MATH.'
      }, {
        key: 7,
        name: 'Git',
        image: '/images/techs/git.svg',
        description: 'Lots of people use React as the V in MVC. Since React makes no assumptions about the rest of your technology stack, it\'s easy to try it out on a small feature in an existing project.'
      }
    ];

    this.state = {
      techs: techsMap
    };
  }

  _techComponents(items) {
    return items.map((tech) => <Tech key={tech.key} data={tech}/>);
  }

  render() {
    var techList = this._techComponents(this.state.techs);
    return <ul className="tech-gallery">
            {techList}
          </ul>
  }
}

module.exports = Gallery;
