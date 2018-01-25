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
            <h1>Hi, I'm Paul</h1>
            <p className="about-me">Head of Design at <a href="http://www.rightindem.com">RightIndem</a><br /><br />
            I have a natural love for user interaction and user psychology.</p>
          </header>

          <section className="work blue">
            <div style={{ overflow: 'hidden'}}>
              <ul className="workList">
                <li style={{ display: 'inline-block', width: '375px'}}>
                  <img src="https://github.com/paulwallas/portfolio/blob/master/public/work-kitchen-app.png?raw=true" alt="Work Example" />
                  <p>Kitchen Selector iOS App</p>
                </li>
                <li style={{ display: 'inline-block', width: '375px'}}>
                  <img src="https://github.com/paulwallas/portfolio/blob/master/public/work-health-app.png?raw=true" alt="Work Example" />
                  <p>Health-tech Reporting Web App</p>
                </li>
                <li style={{ display: 'inline-block', width: '375px'}}>
                  <img src="https://github.com/paulwallas/portfolio/blob/master/public/work_cp.png?raw=true" alt="Work Example" />
                  <p>Care Partner Website</p>
                </li>
              </ul>
            </div>
          </section>

          <h2>How I Work</h2>
          <p className="content">Users and their emotional needs are my starting point for every project.<br /><br />
Identifying user demographics and user environments, I begin to design the optimal journey via low fidelity, animated mocks.<br /><br />
Liaising with clients, BAs and development teams, advocating good user experience, I begin to test the journey, slowly building towards a high fidelity visual.</p>

          <section className="work purple">
            <div style={{ overflow: 'hidden'}}>
              <ul className="workList">
                <li style={{ display: 'inline-block', width: '375px'}}>
                  <img src="https://github.com/paulwallas/portfolio/blob/master/public/work-bump.png?raw=true" alt="Work Example" />
                  <p>Roadside Assist iOS App</p>
                </li>
                <li style={{ display: 'inline-block', width: '375px'}}>
                  <img src="https://github.com/paulwallas/portfolio/blob/master/public/work-admiral.png?raw=true" alt="Work Example" />
                  <p>Admiral Vehicle Valuation Web App</p>
                </li>
                <li style={{ display: 'inline-block', width: '375px'}}>
                  <img src="https://github.com/paulwallas/portfolio/blob/master/public/work-deloitte.png?raw=true" alt="Work Example" />
                  <p>Deloitte Claims Management Web App</p>
                </li>
              </ul>
            </div>
          </section>

          <p className="content foot">I have created work for brands such as Admiral, Deloitte and XL Catlin while also producing work for local deveopment friends Glass Umbrella.<br /><br />
          If you'd like to see more of my work or view my CV, please <a href="mailto:paulwallas@me.com">get in touch</a></p>
        </div>








      </div>
    );
  }
}

export default App;
