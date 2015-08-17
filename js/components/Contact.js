import React from 'react';
import {DefaultRoute, Link, Route, RouteHandler } from 'react-router';
import App from '../app.js';

import ContactHandler from './Contact.js';

var Contact = React.createClass({
  copyToClipboard: function() {
    window.prompt("just copy and paste:", "aaron.yih@ucla.edu");
  },
	render(){
		return(
			<div>
				<div style ={verticalLineContainerStyle}>
					<img style = {verticalLineStyle} src="pix.gif" />
				</div>
				<ul style={waysToConenctStyle}>
          <li id = "test"><h1 style={titleStyle}>aaron yih</h1></li>
          <li><a onClick={this.copyToClipboard}>aaron.yih@ucla.edu</a></li>
          <li> < a href='https://www.linkedin.com/in/aaronyih' target = "_blank">let&#39;s connect</a></li>
          <li><a href = "https://twitter.com/aaronyih1" target="_blank">follow me</a></li>
          <li>< a href = "https://www.facebook.com/aaron.yih.1" target = "_blank">like me</a></li>
        </ul>
			</div>
		);
	}
});
var verticalLineContainerStyle={
  display:"inline-block",
  marginLeft: "10vw"
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

var titleStyle ={
  fontWeight: "100",
  display:'inline-block',
  marginBottom:'6px',
  marginLeft: '-2px'
};
var waysToConenctStyle={
  listStyleType:'none',
  display: 'inline-block',
  position:'relative',
  left: '40vw',
  bottom:'15vh'
}

export default Contact;