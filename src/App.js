import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <div className="container intro">
          <div className="fadeText">
              <h1 className="title">I design delightful experiences.<br />Always.</h1>
              <p className="content">Follow me on <a href="https://twitter.com/paulwallas">twitter</a> and <a href="https://medium.com/@paulwallas">medium</a>.</p>
          </div>
        </div>
        <div className="container about">
          <div className="fadeText">
              <h2 className="subtitle">Nice to meet you.</h2>
              <p className="aboutContent">Hi, I’m Paul and I’m currently Head of Design at RightIndem. <br /><br />

I have a natural love for user interaction and user psychology. I’m intrigued as to how we, as users, make decisions and what are our emotive drivers. My aim is to understand, have empathy and deliver delightful experiences to all users.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
