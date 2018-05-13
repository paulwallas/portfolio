import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <section className="wrapperDark">
          <div className="wrapperInner fadeIn">
            
            <nav className="fadeIn">
              <ul className="social textSmall">
                <li><a href="https://twitter.com/paulwallas">twitter</a></li>
                <li><a href="https://medium.com/@paulwallas">medium</a></li>
                <li><a href="https://www.instagram.com/paulwallas/">instagram</a></li>
              </ul>
            </nav>

            <h1 className="textXLarge">I’m Paul Wallas, a passionate user experience and user interface designer working in Nottingham, UK.</h1>
            <img className="meWorking" src="https://github.com/paulwallas/portfolio/blob/master/public/me-at-whiteboard.png?raw=true" alt="Exploring ideas at a whiteboard" />
            <h2 className="textLarge">I aim to recognise and understand users’ emotions, commited to solving problems and delivering solutions in a creative and elegant way. I’m driven to help people and teams achieve their goals. I’m proud to have produced work for Deloitte, Admiral and XL Catlin in my career to date.</h2>

          </div>
        </section>

        <section className="wrapperLight">
          <div className="wrapperInner textRegular">
            
            <h3 className="title">Career history</h3>
            <ul className="careerHistory">
              <li>
                  <p className="careerPosition"><a href="https://www.rightindem.com">Head of Design at RightIdem</a></p>
                  <p className="careerDate">Aug 2016 - Present</p>
                  <p className="careerDescription">Working between Business Analysts and the Development team, I research our users to understand their emotional needs, requirements and product expectations. This is translated into user personas from which I build user stories and early user journeys, often at the <a href="https://medium.com/rightindem-design-team/reasons-why-every-design-team-should-have-a-whiteboard-bb6db7da0686">whiteboard</a>. From here I begin to finalise journeys, collaborating with the team to ensure the optimal solution is defined.</p>
              </li>
              <li>
                  <p className="careerPosition"><a href="https://imosphere.co.uk">UI/UX Design Lead at iMoSPHERE</a></p>
                  <p className="careerDate">Jan 2015 - Aug 2016</p>
                  <p className="careerDescription">Working alongside the Development team in an agile environment, I produced the UI library and brand guidance for the company’s flagship product. In addition, my responsibilities covered the product website, product blog, twitter announcements and updates, supporting product offline material and product mascot illustrations.</p>
              </li>
              <li>
                  <p className="careerPosition"><a href="https://imosphere.co.uk">UI/UX Designer at FACE</a></p>
                  <p className="careerDate">Oct 2009 - Jan 2015</p>
                  <p className="careerDescription">Working alongside the Development team adopting the waterfall methodology, I conducted initial user sessions, often off-site learning about their working process, expectations and requirements of a new product. I translated these into Balsamiq Mocks, liaising with the Development Manager before finalizing these into high-fidelity visuals. </p>
              </li>
              <li>
                  <p className="careerPosition">Web Designer at Soula Design</p>
                  <p className="careerDate">Sep 2006 - Sep 2009</p>
                  <p className="careerDescription">Working within a small design team, my role covered all aspects of visual web design from web, animated web banners, call to actions and poster illustration. Here I began to discover user habits and user interface principles which propelled my interest and change in career path to study the user interface and user experience roles.</p>
              </li>
              <li>
                  <p className="careerPosition"><a href="https://www.daykinandstorey.co.uk">Junior Designer at Daykin &amp; Story</a></p>
                  <p className="careerDate">Jun 2006 - Aug 2006</p>
                  <p className="careerDescription">I aim to recognise and understand users’ emotions, commited to solving problems and delivering solutions in a creative and elegant way. I’m driven to help people and teams achieve their goals.</p>
              </li>
            </ul>
          </div>
        </section>

        <section className="wrapperDark">
          <div className="wrapperInner textRegular fadeIn">

            <h3 className="title">About me</h3>
            <p>Over the years, I’ve refocused my interest from visual design to GUI design principles and design psychology. Understanding how and why users interact with design, their mental models, their expectations and behaviours enables me to produce work that not only satisfies their needs but further drives my thirst for knowledge.<br /><br />
            Outside of work I will often be attending design meet-ups and design conferences, writing on Medium or posting on Dribbble. My passions outside of work include football, F1, food and ale, especially the local food and drink festivals.</p>

          </div>
        </section>
      </div>
    );
  }
}

export default App;
