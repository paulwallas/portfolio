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
            <p className="info">You can find me on <a href="https://twitter.com/paulwallas">twitter</a>, <a href="https://medium.com/@paulwallas">medium</a> and <a href="https://www.instagram.com/paulwallas/">instagram</a>.</p>
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
            <p className="info">I have produced work for global market leaders such as Deloitte, Admiral and XLCatlin. I'm also passionate about producing design material for local friends; <a href="https://twitter.com/glassumbrellaco">Glass Umbrella</a>, <a href="https://twitter.com/nottsdev">Notts Dev Workshop</a> and <a href="https://twitter.com/cococheesecakes">cococheesecakes</a>.</p>
        </section>

        <section className="wrapperOuter fadeIn">
          <div className="work doubleCol">
            <div className="wrapperInner">
              <h3>Web Applications</h3>
            </div>
            <div className="workItem1">
            <img src={deloitte} alt="deloitte-app"/>
            </div>
            <div className="workItem2">
              <img src={admiralApp} alt="admiral-app"/>
            </div>
          </div>
        </section>

        <section className="wrapperInner fadeIn">
            <p className="info">I have over 10 years of experience working across all disciplines of the design domain. 5 years ago my passion diverted my focus into the user experience and user interface element of design, understanding user psychology and decision making and how this effects product interaction.</p>
        </section>

        <section className="wrapperOuter fadeIn">
          <div className="work doubleCol">
            <div className="wrapperInner">
              <h3>Website / Brochureware</h3>
            </div>
            <div className="workItem1">
            <img src={carePartner} alt="care-partner-website"/>
            </div>
            <div className="workItem2">
              <img src={rightindem} alt="rightindem-website"/>
            </div>
          </div>
        </section>

        <section className="wrapperInner fadeIn">
            <p className="info">I’m skilled across many design disciplines having produced web applications, websites, iOS apps, branding guidelines, off-screen material and illustrations. I'm comfortable using Sketch, Adobe Xd, Balsamiq, Photoshop, Illustrator and Indesign.</p>
        </section>

        <section className="wrapperOuter fadeIn">
          <div className="work">
            <div className="wrapperInner">
              <h3>iOS &amp; tvOS Icons</h3>
            </div>
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
            <p className="info">Currently working as Head of UI/UX Design at <a href="https://rightindem.com">RightIndem</a>, I lead a team of designers creating responsive web applications for the insurance tech industry.<br /><br /> My role is to understand users’ emotion, research their requirements and learn their product expectations. Once established they’re absorbed into my design process with the aim of improving their experience by tailoring our product to match their explicit and implicit needs.</p>
        </section>

      </div>
    );
  }
}

export default App;
