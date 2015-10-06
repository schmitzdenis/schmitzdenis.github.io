import React from 'react';
import Hello from './components/hello';
import Nav from './components/nav';
import css from './style.scss';

React.render(<Nav/>, document.getElementById('nav'));
React.render(<Hello/>, document.getElementById('content'));
