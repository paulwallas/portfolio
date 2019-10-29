import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        
        <div className="flex-item fadeIn fadeUp">
            <h1 className="title">Paul Wallas</h1>
            <p className="info">User Interface &amp; User Experience Designer.<br /><br />
            Over 10 years experience designing and delivering user-centric solutions, advocating the importance of user experience. I’ve helped companies improve their customer communication by enhancing and/or redesigning their brand message and managed teams of designers helping to develop individual skillsets.<br /><br />
            Although specialising in user interface and user experience design, I’m a multi-discipled designer with skills in illustration, print, iconography and iOS application design.<br /><br />
            Work samples can be <a href="mailto:paulwallas@me.com">sent on request</a> or you can sample a <a href="">preview here</a>.</p>
        </div>

      </div>
    );
  }
}

export default App;
