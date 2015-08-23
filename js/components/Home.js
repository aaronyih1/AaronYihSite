import React from 'react';
import {DefaultRoute, Link, Route, RouteHandler } from 'react-router';
import App from '../app.js';

import PhilosophyHandler from './Philosophy.js';
import StoryHandler from './Story.js';
import WorkHandler from './Work.js';
import BlogHandler from './Blog.js';

var Home = React.createClass({
	render(){
		return(
			<div> 
				<div id = "chairn">
			 	 	<img id = "beam1" src = "../../imgs/beam1.svg" />
			 	 	<img id = "rock" src = "../../imgs/rock.svg" />
			  		<img id = "beam2" src = "../../imgs/beam2.svg" />
			 	 	<img id = "triangle" src = "../../imgs/triangle.svg" />
			 	 	<img id = "shadow" src = "../../imgs/shadow.png" />
				</div>
				<ul style = {MenuStyle}>
				  <li><a><Link to="story" style = {linkStyle}><span>story</span></Link></a></li>
				  <li><a><Link to="philosophy" style = {linkStyle}><span>philosophy</span></Link></a></li>
				  <li><a><Link to="work" style = {linkStyle}><span>work</span></Link></a></li>
				  <li><a href="http://www.aaronyih.com/blog/" target="_blank"><span>blog</span></a></li>
				</ul>
			 </div>
		);
	}
});

var linkStyle = {
  textDecoration:'none',
  color: 'black'
};
var MenuStyle = {
  display: 'block',
  position: 'relative',
  left: '710px',
  top: '-720px',
  listStyleType: 'none',
  fontSize: '21pt',
  fontFamily: 'avenir',
  fontWeight: '100',
  width: '200'
};

export default Home;