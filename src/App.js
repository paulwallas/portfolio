import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="title">Hi, I'm Paul.</h1>
        <p className="content">Head of Design at <a href="http://www.rightindem.com">RightIndem</a></p>
        <p className="content">I create simple and intuitive interfaces that are clean and free of complexity.</p>
        <hr />
        <p className="content">You can follow me on <a href="https://twitter.com/paulwallas">twitter</a> and <a href="https://medium.com/@paulwallas">medium</a>.</p>
      </div>
    );
  }
}

export default App;
