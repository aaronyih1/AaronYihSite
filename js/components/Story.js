import React from 'react';
import {DefaultRoute, Link, Route, RouteHandler } from 'react-router';
import App from '../app.js';

import PhilosophyHandler from './Philosophy.js';
import StoryHandler from './Story.js';
import WorkHandler from './Work.js';
import BlogHandler from './Blog.js';

var Story = React.createClass({
	render(){
		return(
			<div>
				<h1 style={titleStyle}>story</h1>
				<div style ={verticalLineContainerStyle}>
					<img style = {verticalLineStyle} src="pix.gif" />
				</div>
				<ul style={sectionNavStyle}>
					<li style={sectionNavMenuStyle}><Link to="philosophy"><span>philosophy</span></Link></li>
					<li style={sectionNavMenuStyle}><Link to="work"><span>work</span></Link></li>
					<li style={sectionNavMenuStyle}><a href="http://www.aaronyih.com/blog/"><span>blog</span></a></li>
					<RouteHandler/>
				</ul>
				<div style = {containerStyle} className="containerStyle">
					<img src = "../imgs/profilepic.jpg" style = {profileStyle}/>
					<p style = {paragraphStyle}>My name is Aaron Yih. I’m studying cognitive science at UCLA, but <span style ={spanStyle}>my passion</span> lies in creating beautiful things. Right now, this desire <span style ={spanStyle}>manifests itself in 3 ways:</span> relationships, designing, and writing. <span style ={spanStyle}>Relationships</span> are the most important things in my life, and I’ll often pick up a project just because of the people working on that thing. <span style ={spanStyle}>Designing</span> includes mostly <span style ={spanStyle}>mobile apps, websites, and logos</span>. If you want something designed, send me an email, <span style ={spanStyle}>and</span> we’ll talk. <span style ={spanStyle}>Writing</span> is one of the purest ways to communicate with other people. I love “making my words behave,” but sometimes they don’t, so I’m open to feedback on my posts. Also looking for content from elsewhere that <em>you</em> find interesting. </p>
				</div>
			</div>
		);
	}
});
var profileStyle={
	display:"block",
	margin: "0 auto",
	width: "50%"
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
var containerStyle={
	display:'inline-block',
	width: "350px",
	whiteSpace: "normal",
	marginLeft: "40px",
	position:"relative",
	bottom: "3vh",
	left: "5vw"
};
var paragraphStyle={
	align: "justify"
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

export default Story;