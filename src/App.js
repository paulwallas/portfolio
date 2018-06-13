import React, { Component } from 'react';
import './App.css';
import me from './assets/me-at-whiteboard.png';
import admiralApp from './assets/admiral-app.png';
import carePartner from './assets/care-partner-website.png';
import bumpApp from './assets/bump-app.png';
import healthApp from './assets/health-app.png';
import moneyApp from './assets/money-app.png';

class App extends Component {
  render() {
    return (
      <div>
        
        <section className="wrapperInner fadeIn">
            <h1 className="title">I’m Paul, a passionate user experience and user interface designer.</h1>
            <p className="info">You can find me on <a href="https://twitter.com/paulwallas">twitter</a>, <a href="https://medium.com/@paulwallas">medium</a> and <a href="https://www.instagram.com/paulwallas/">instagram</a>. If you’d like to learn about my career to date read my <a href="https://goo.gl/7oj8Yg">cv</a>.</p>
        </section>

        <section className="wrapperOuter fadeIn">
          <div className="work">
            <img src={me} className="workItem" alt="me-at-whiteboard"/>
            <img src={admiralApp} className="workItem" alt="admiral-claim-app"/>
            <img src={carePartner} className="workItem" alt="care-partner-website"/>
            <img src={bumpApp} className="workItem" alt="bump-and-go-app"/>
            <img src={moneyApp} className="workItem" alt="money-app"/>
            <img src={healthApp} className="workItem" alt="health-app"/>
          </div>
        </section>

        <section className="wrapperInner fadeIn">
            <p className="info">In my role as a user experience designer, I aim to understand users’ emotion, contextual environment, requirements and product expectations. Once established they’re absorbed into my design process. My aim is to improve their experience by tailoring the product to match the user’s explicit and implicit needs.<br /><br />
I’m currently working as Head of UI/UX Design at <a href="https://rightindem.com">RightIndem.</a></p>
        </section>

      </div>
    );
  }
}

export default App;
