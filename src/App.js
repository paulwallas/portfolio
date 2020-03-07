import React from 'react';
import logo from './me.png';
import blob from './blob.svg';
import workSampleAdmiral1 from './work-sample-admiral1.png';
import workSampleAdmiral2 from './work-sample-admiral2.png';
import workSampleING1 from './work-sample-ing1.png';
import workSampleING2 from './work-sample-ing2.png';
import workSampleCP1 from './work-sample-cp1.png';
import workSampleCP2 from './work-sample-cp2.png';
import workSampleRI from './work-sample-ri.png';

import './App.css';

function App() {
  return (
    <div className="app">
      <header className="header">
        <img src={logo} className="me" alt="logo" />
        <p className="intro">Paul Wallas <b className="role">UI &amp; UX Designer</b></p>
      </header>

      <h1 className="personal-statement">Believing design has the ability to add incredible value to people’s lives, I pursue all of my projects with passionate, meaningful and deliberate values.</h1>

      <section className="about-me">
        <img src={blob} className="blob blob-spin" />
        <div className="about-container">
          <p><b>About</b>
              <br /><br /> 
              I have no more than 10 years of experience working with clients across a multitude of industries, delivering products and interfaces that are intuitive, elegant, coherent and user focused - whilst meeting business and customer requirements.
              <br /><br />
I’ve produced visual interfaces, customer journey maps, user personas and conducted several user workshops with organisations and companies both big and small which include the NHS, Admiral, AXA Insurance and NN.
              <br /><br />
              I’m passionate about visual design, health &amp; fitness and living life as a minimalist. I write about these passions and more on my <a href="https://medium.com/@paulwallas">Medium account.</a>
              <br /><br />
If you would like to know more about me or my career in design, please feel free to drop me a message.
          </p>
        </div>
      </section>



      <section className="work-samples">
        <div className="content-intro">
          <b>Work samples</b>
          <br />  
          Below is a subset of some of my recent work
        </div>
        <div className="work-container pink">
          <img src={workSampleING1} className="work-iPhone" />
          <img src={workSampleING2} className="work-iPhone" />
        </div>
        <div className="project-description">
          <b>ING Insurance: <span class="description">Claims Reporting Application</span></b>
          <br />  
          As a lead designer I crafted a conversational customer experience that allows customers to report claims through the use of a chat-inspired user interface. This project involved the creation of an atomic design system, developed in Sketch, to maintain consistency and familiarity while also facilitating rapid prototyping of high fidelity ideas and solutions.           </div>
        <div className="work-container yellow">
          <img src={workSampleAdmiral1} className="work-iPhone" />
          <img src={workSampleAdmiral2} className="work-iPhone" />
        </div>
        <div className="project-description">
          <b>Admiral: <span class="description">Vehicle Total Loss Application</span></b>
          <br />  
          Responsible for both the user interface and user experience design, I presented design thinking to senior stakeholders and Admiral users through the use of low-fi mock-ups. Advancing these mock-ups further, I created high-fidelity designs, including animation design, to represent the final customer journey.
        </div>
        <div className="work-container blue">
          <img src={workSampleCP1} className="work-iPhone" />
          <img src={workSampleCP2} className="work-iPhone" />
        </div>
        <div className="project-description">
          <b>Care Partner: <span class="description">Patient Management System</span></b>
          <br />  
          As lead designer for Care Partner, I was responsible for both screen and print material. Engaging with customers on site, I produced customer journeys and emotional maps to understand customer behaviour. From here, I worked within a small team of developers as lead UI designer producing UI design for both the Care Partner product and it's promotional website.  
        </div>
        <div className="work-container teal">
          <img src={workSampleRI} className="work-iPad" />
        </div>
        <div className="project-description">
          <b>RightIndem: <span class="description">Company Website</span></b>
          <br />  
          Managing a team of designers, I was responsible for liasing with our CEO to identify business requirements while creating and directing our visual design approach and communicating this with my team.
        </div>
      </section>
  </div>
  );
}

export default App;