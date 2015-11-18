import React from 'react';
import Layout from './components/layout.jsx';

require("file?name=[name].[ext]!./index.html");
require("file?name=[name]!./CNAME.tpl");
require('./components/style.scss');


React.render(<Layout/>, document.getElementById('content'));
