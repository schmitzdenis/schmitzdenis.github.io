var React = require('react');
var Hello = require('./components/hello');
var css = require('./style.scss');

React.renderComponent('<Hello />', document.getElementById('content') );
