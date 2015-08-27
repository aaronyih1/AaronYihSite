import React from 'react';  
import Router from 'react-router';  
import {DefaultRoute, Link, Route, RouteHandler } from 'react-router';

import StoryHandler from './components/Story.js';
import PhilosophyHandler from './components/Philosophy.js';
import WorkHandler from './components/Work.js';
import BlogHandler from './components/Blog.js';
import ContactHandler from './components/Contact.js';
import HomeHandler from './components/Home.js';

var App = React.createClass({  
  render() {
    return (
      <div>
          <ul style ={navigationStyle}>
            <li style={contactStyle}><a><Link to="contact"><span>contact</span></Link></a></li>
            <li style={contactStyle}><a><Link to="app"><span>home</span></Link></a></li>
            <RouteHandler/>
          </ul>
      </div>
    );
  }
});
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
var routes = (  
  <Route name="app" path="/" handler={App}>
    <DefaultRoute handler={HomeHandler}/>
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