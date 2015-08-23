import React from 'react';
import {DefaultRoute, Link, Route, RouteHandler } from 'react-router';
import App from '../app.js';

import PhilosophyHandler from './Philosophy.js';
import StoryHandler from './Story.js';
import WorkHandler from './Work.js';
import BlogHandler from './Blog.js';

let Philosophy = React.createClass({ 

  render() {
    return(
    	<div>
    		<h1 style={titleStyle}>philosophy</h1>
    		<div style ={verticalLineContainerStyle}>
    			<img style = {verticalLineStyle} src="pix.gif" />
    		</div>
    		<ul style={sectionNavStyle}>
    			<li style={sectionNavMenuStyle}><Link to='story'><span>story</span></Link></li>
    			<li style={sectionNavMenuStyle}><Link to='work'><span>work</span></Link></li>
    			<li style={sectionNavMenuStyle}><a href = "http://www.aaronyih.com/blog/"><span>blog</span></a></li>
    		</ul>
    		<div style = {containerStyle}>
    			<p style = {paragraphStyle}>Important people <span style ={spanStyle}>make</span> a positive impact on others. They do it on a daily basis with the people they know, and sometimes they figure out a way to affect people they don’t know. I’m searching for ways to make a <span style ={spanStyle}>positive impact</span> in as many people’s lives as possible, and I hope to have a bit of fun along the way<span style ={spanStyle}>.</span></p>
    			<p style = {paragraphStyle}>Expression is the cornerstone of <span style ={spanStyle}>humanity</span>, and it <span style ={spanStyle}>can</span> take many unique forms. Writing, drawing, cooking, painting, singing, and dancing are all forms of expression, and there are many more. As humans, we should <span style ={spanStyle}>find</span> our precious form of <span style ={spanStyle}>expression</span> and let it go where it pleases<span style ={spanStyle}>.</span></p>
    			<p style = {paragraphStyle}>Balance is cliché. I don’t mean the word; I mean the concept. My life is the result of meticulous balance between happiness and achievement, aestheticism and functionality, and sociability and introspection. Most of us deal with these conflicts, and the equilibrium we reach between these two extremes is what makes us different from one another.</p>
    			<p style = {paragraphStyle}>Throughout our lives, we find expression and balance, and so do the designs that I create.</p>
    		</div>
    	</div>
    );
  }
});

var verticalLineContainerStyle={
	display:"inline-block",
	marginLeft: "5vw"
};
var spanStyle={
	color: "#cb0000"
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
	top: "2vh",
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

export default Philosophy;  