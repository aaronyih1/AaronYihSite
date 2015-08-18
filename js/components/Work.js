import React from 'react';
import {DefaultRoute, Link, Route, RouteHandler } from 'react-router';
import App from '../app.js';

import PhilosophyHandler from './Philosophy.js';
import StoryHandler from './Story.js';
import WorkHandler from './Work.js';
import BlogHandler from './Blog.js';

var Work = React.createClass({
	render(){
		return(
			<div>
				<h1 style={titleStyle}>work</h1>
				<div style ={verticalLineContainerStyle}>
					<img style = {verticalLineStyle} src="pix.gif" />
				</div>
				<ul style={sectionNavStyle}>
					<li style={sectionNavMenuStyle}><Link to="story">story</Link></li>
					<li style={sectionNavMenuStyle}><Link to="philosophy">philosophy</Link></li>
					<li style={sectionNavMenuStyle}><a href = "http://www.aaronyih.com/blog/">blog</a></li>
					<RouteHandler/>
				</ul>
				<p style = {paragraphStyle}><span style ={spanStyle}>I</span> have an obsession with humanity. There, I said it. Particularly, I find humanity’s unique ability to <span style ={spanStyle}>find beauty</span> in the world around us admirable. We do not needfully consume, ignoring the splendor of all things created and not. We spend days outside, enjoying nature’s indifferent allure, and we buy products that inspire, <span style ={spanStyle}>in</span> us, a sensation of <span style ={spanStyle}>awe and attraction.</span> Here’s just some of the beauty that I’ve put forth into the world:</p>
				<table style = {tableStyle}>
					<tr style={rowStyle}>
						<td><a href='http://www.tupleapp.com' target = "_blank"><img style = {projectLogosStyle} src='../imgs/tuple.png'/></a></td>
						<td style={colStyle}><a href='http://www.tupleapp.com' target = "_blank"><h1 style = {projectTitleStyle}>tuple</h1></a><p id = 'test' style = {projectDescriptionStyle}>an iOS app that helps you meet your friends of friends.</p></td>
					</tr>
					<tr>
						<td><a href='http://www.gofindthedream.com' target = "_blank"><img style = {projectLogosStyle} src='../imgs/gofindthedream.png' /></a></td>
						<td><a href='http://www.gofindthedream.com' target = "_blank"><h1 style = {projectTitleStyle}>gofindthedream.com</h1><p style = {projectDescriptionStyle}>a website that helps people reach their their dreams with the click of a button.</p></a></td>
					</tr>
					<tr>
						<td><a href='http://www.startruntest.com' target = "_blank"><img style = {projectLogosStyle} src='../imgs/peek.png'/></a></td>
						<td><a href='http://www.startruntest.com' target = "_blank"><h1 style = {projectTitleStyle}>peek</h1></a><p style = {projectDescriptionStyle}>an iOS app that let’s you peek into your role models’ schedules, so you can live like they do.</p></td>
					</tr>
				</table>
			</div>
		);
	}
});
var tableStyle={
	display:'inline-block',
	position:'relative',
	height: '400px',
	width: '450px',
	overflow: 'scroll',
	left: '-470px',
	top: '40px'
};
var rowStyle={
	width: '100%'
};
var colStyle ={
	width: '100%'
};
var projectLogosStyle={
	width: '100px',
	borderRadius: '10px'
};
var projectTitleStyle={
	marginLeft:'15px',
	marginTop:'-15px',
	color: 'black'
};
var projectDescriptionStyle={
	marginLeft:'15px',
	marginTop:'-25px',
	color:'black'
};
var spanStyle={
	color: "#cb0000"
};
var verticalLineContainerStyle={
  display:"inline-block",
  marginLeft: "5vw"
};
var verticalLineStyle = {
  backgroundColor: "#000",
  width: "2px",
  height: "85vh",
  border:"0px",
  position:"relative",
  top: "5vh",
  bottom: "5vh"
};
var contactStyle = {
  float:"right",
  display:"inline",
  fontFamily: "avenir",
  fontWeight: '200',
  opacity:"0.3",
  marginRight:"30px"
};
var navigationStyle = {
  listStyleType: "none"
};
var paragraphStyle={
  display: "inline-block",
  width: "500px",
  whiteSpace: "normal",
  position:'relative',
  top:'-370px'
};
var titleStyle ={
  fontWeight: "100",
  display:"inline-block",
  marginLeft: "7vw",
  marginTop: "-5vh",
  position: "relative",
  top:"-30px"
};
var sectionNavStyle={
  display:"inline-block",
  listStyleType:"none",
  marginLeft: "-20px",
  position: "relative",
  top:"-7px"
};
var sectionNavMenuStyle={
  fontFamily: "avenir",
  fontWeight: '200',
  opacity:"0.3",
  marginRight:"30px",
  fontSize: "13pt"
};
export default Work;