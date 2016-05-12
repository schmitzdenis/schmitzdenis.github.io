'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './components/layout.jsx';


require("file?name=[name].[ext]!./index.html");
require("file?name=[name]!./CNAME.tpl");
require('./components/style.scss');

ReactDOM.render(<Layout/>, document.getElementById('content'));
