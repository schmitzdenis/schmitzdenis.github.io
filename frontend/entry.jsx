
/** @jsx React.DOM */

var React = require('react');
var Hello = require('./Hello');
var css = require('./style.scss');

React.renderComponent(<Hello />, document.getElementById('content'));
