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
              <p className="content">Hi, I’m Paul and I’m Head of Design at RightIndem.
              <br /><br />
              I have a natural love for user interaction and user psychology. I’m intrigued as to how we, as users, make decisions and what are our emotive drivers. My aim is to understand, have empathy and deliver delightful experiences to all users.
              <br /><br />
              View my <a href="https://www.paulwallas.com/Paul_Wallas_Resume.pdf">résumé.</a>
              </p>
          </div>
        </div>
        <div className="container work">
          <div className="fadeText">
              <h2 className="subtitle">How I approach work.</h2>
              <p className="content">I begin each task by identifying the user persona and user environment. Once understood, I place my mind-set in that of the user, re-enacting their end-to-end journey. This allows me to identify potential barriers to entry, user pain-points, additional actors and the context of the journey.
              <br /><br />
              Starting with low fidelity mocks and animated interactions, I begin the design of the optimal journey. Liaising with BAs and Development, advocating good user experience, the journey is refined to a highfidelity state and communicated to the wider team.
              </p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
