var React = require('react');
var ReactDOM = require('react-dom');
import {BrowserRouter as Router, Route, HashRouter, Link} from 'react-router-dom' ;

// Our Components
var Main = require('Main');
var Weather = require('Weather');
var About = require('About');
var Examples = require('Examples');

// Load Foundation
require('style-loader!css-loader!foundation-sites/dist/css/foundation.min.css'); 
require('style-loader!css-loader!foundation-sites/dist/css/foundation-float.min.css'); // <--- new line

$(document).foundation();

ReactDOM.render(
    <Router>
        <Route path='/' component={Main}/>
    </Router>,
    document.getElementById("app")
);