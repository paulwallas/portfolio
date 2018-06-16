import React, { Component } from 'react';
import './App.css';
import me from './assets/me-at-whiteboard.png';
import admiralApp from './assets/admiral-app.png';
import carePartner from './assets/care-partner-website.png';
import bumpApp from './assets/bump-app.png';
import drank from './assets/drank.png';
import watchLater from './assets/watch-it-later.png';
import parkr from './assets/parkr.png';
import moneyApp from './assets/money-app.png';
import deloitte from './assets/deloitte-app.png';
import rightindem from './assets/rightindem-website.png';

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
            <div className="workItem1">
            <img src={me} alt="me-at-whiteboard"/>
            </div>
            <div className="workItem2">
              <img src={moneyApp} alt="money-tracker-app"/>
              <img src={bumpApp} alt="bump-and-go-app"/>
            </div>
          </div>
        </section>

        <section className="wrapperInner fadeIn">
            <p className="info">I have produced work for global market leaders such as Deloitte, Admiral and XLCatlin, having the ability to meet and communicate design ideas to key client stakeholders.</p>
        </section>

        <section className="wrapperOuter fadeIn">
          <div className="work doubleCol">
            <div className="workItem1">
            <img src={deloitte} alt="deloitte-app"/>
            </div>
            <div className="workItem2">
              <img src={admiralApp} alt="admiral-app"/>
            </div>
          </div>
        </section>

        <section className="wrapperInner fadeIn">
            <p className="info">I’m experienced creating white-label interfacing products and products that adhere to existing brand guidelines. I have created, maintained and evolved several brands throughout my career.</p>
        </section>

        <section className="wrapperOuter fadeIn">
          <div className="work doubleCol">
            <div className="workItem1">
            <img src={carePartner} alt="care-partner-website"/>
            </div>
            <div className="workItem2">
              <img src={rightindem} alt="rightindem-website"/>
            </div>
          </div>
        </section>

        <section className="wrapperInner fadeIn">
            <p className="info">I’m skilled across many design disciplines having produced web applications, websites, iOS apps, branding guidelines, off-screen material and illustrations.</p>
        </section>

        <section className="wrapperOuter fadeIn">
          <div className="work">
            <div className="workItem1">
            <img src={watchLater} alt="watch-it-later-tvos-icon"/>
            </div>
            <div className="workItem2">
              <img src={drank} alt="frank-ios-icon"/>
              <img src={parkr} alt="parkr-ios-icon"/>
            </div>
          </div>
        </section>

        <section className="wrapperInner fadeIn">
            <p className="info">In my role as Head of UI/UX Design at <a href="https://rightindem.com">RightIndem</a> I aim to understand users’ emotion, research their requirements and product expectations. Once established they’re absorbed into my design process. My aim is to improve their experience by tailoring the product to match the user’s explicit and implicit needs.<br /><br />
            I develop both low-fi, high-fi and interactive mock-ups using Sketch, Balsamiq and office <a href="https://medium.com/rightindem-design-team/reasons-why-every-design-team-should-have-a-whiteboard-bb6db7da0686">whiteboards</a> and these are shared with the wider team for early collaboration and visibility. From here I develop high quality aesthetic designs and interactions ready for effort estimation. I'm able to support the development with the implementation of these designs into the application.</p>
        </section>

      </div>
    );
  }
}

export default App;
