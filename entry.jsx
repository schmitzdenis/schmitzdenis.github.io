'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';

import About from './components/about/component';
import ReleaseList from './components/release-list/component';
import Matrix from './components/sandbox/component';

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
      component: ReleaseList
    }, {
      path: 'about',
      component: About
    },{
      path:'contact',
      component:Contact
    },{
      path:'sandbox',
      component:Matrix
    }
  ]
};

ReactDOM.render(
  <Router history={browserHistory} routes={routes}/>,
  document.getElementById('content')
);
