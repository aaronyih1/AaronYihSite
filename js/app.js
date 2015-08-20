import React from 'react';  
import Router from 'react-router';  
import {DefaultRoute, Link, Route, RouteHandler } from 'react-router';

import StoryHandler from './components/Story.js';
import PhilosophyHandler from './components/Philosophy.js';
import WorkHandler from './components/Work.js';
import BlogHandler from './components/Blog.js';
import ContactHandler from './components/Contact.js';

var App = React.createClass({  
  render() {
    return (
      <div>
          <ul style ={navigationStyle}>
            <li style={contactStyle}><Link to="contact" style = {linkStyleNav}><a>contact</a></Link></li>
            <li style={contactStyle}><Link to="app" style = {linkStyleNav}><a>home</a></Link></li>
            <RouteHandler/>
          </ul>
          <Home/>
      </div>
    );
  }
});
var linkStyleNav ={
  textDecoration:'none',
  color: 'black'
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
  width: "350px",
  whiteSpace: "normal",
  marginLeft: "40px",
  position:"relative",
  bottom: "200px",
  left: "5vw"
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
var Chairn = React.createClass({
  render: function(){
    return(
      <div id = "chairn">
        <img id = "beam1" src = "../imgs/beam1.svg" />
        <img id = "rock" src = "../imgs/rock.svg" />
        <img id = "beam2" src = "../imgs/beam2.svg" />
        <img id = "triangle" src = "../imgs/triangle.svg" />
        <img id = "shadow" src = "../imgs/shadow.png" />
      </div>
    );
  }
});
var Home = React.createClass({
  render: function(){
    return(
      <div> 
        <Chairn />
        <ul style = {MenuStyle}>
          <li><Link to="story" style = {linkStyle}><a>story</a></Link></li>
          <li><Link to="philosophy" style = {linkStyle}><a>philosophy</a></Link></li>
          <li><Link to="work" style = {linkStyle}><a>work</a></Link></li>
          <li><a href="http://www.aaronyih.com/blog/" target="_blank">blog</a></li>
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
var routes = (  
  <Route name="app" path="/" handler={App}>
    <Route name = "contact" path="/contact" handler={ContactHandler}/>
    <Route name="story" path="/story" handler={StoryHandler}/>
    <Route name="philosophy" path="/philosophy" handler={PhilosophyHandler}/>
    <Route name="work" path="/work" handler={WorkHandler}/>
    <Route name="blog" path="/path" handler={BlogHandler}/>
  </Route>
);

Router.run(routes, function (Handler) {  
  React.render(<Handler/>, document.body);
});