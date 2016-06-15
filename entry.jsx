'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';

import About from './components/about/component';
import ReleaseView from './components/release-view/component';
import Sandbox from './components/sandbox/component';

import Contact from './components/contact/component';
import Layout from './components/layout';


require('./components/style.scss');

const routes = {
  path: '/',
  component: Layout,
  indexRoute: {
    component: About
  },
  childRoutes: [
    {
      path: 'release',
      component: ReleaseView
    }, {
      path: 'about',
      component: About
    },{
      path:'contact',
      component:Contact
    },{
      path:'sandbox',
      component:Sandbox
    }
  ]
};

ReactDOM.render(
  <Router history={browserHistory} routes={routes}/>,
  document.getElementById('content')
);
