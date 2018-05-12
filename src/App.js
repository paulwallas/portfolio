import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <nav className="fadeIn">
          <ul className="social">
            <li><a href="https://twitter.com/paulwallas">twitter</a></li>
            <li><a href="https://medium.com/@paulwallas">medium</a></li>
            <li><a href="https://www.instagram.com/paulwallas/">instagram</a></li>
          </ul>
        </nav>

        <div className="fadeUp">
          <header>
            <p className="about-me">I’m Paul Wallas, a passionate user experience and user interface designer working in Nottingham, UK.</p>
          </header>

          <img src="https://github.com/paulwallas/portfolio/blob/master/public/work-kitchen-app.png?raw=true" alt="Work Example" />

          <h2>How I Work</h2>
          <p className="content">Working between the Business Analysts and Development team I research our products users to understand their emotional needs, requirements and product expectations. This is translated into user personas from which I build user stories. From here I Design user journeys, powered by our UI library </p>

          

          <p className="content foot">I have created work for brands such as Admiral, Deloitte and XL Catlin while also producing work for local deveopment friends Glass Umbrella.<br /><br />
          If you'd like to see more of my work or view my CV, please <a href="mailto:paulwallas@me.com">get in touch</a></p>
        </div>








      </div>
    );
  }
}

export default App;
