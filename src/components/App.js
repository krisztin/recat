import React from 'react';
import '../css/App.css';
import testCats from '../test-cats';

class App extends React.Component {
  state = { cats: testCats };

  openProfile() {
    const openButton = document.querySelector('.info');
    const content = document.querySelector('.profile-data');

    openButton.classList.toggle('close');
    content.classList.toggle('visible');
  }

  render() {
    return (
      <div className="cat">
        <header>
          <div className="logo-primary"></div>
        </header>
        <main>
          <div className="previous btn"></div>
          {/* This really needs to be dealt with
              For some reason content: with emoji does not work
              So here's a CSS heavy hack for right now*/}
          <div className="match"><div className="heart"></div></div>
          <img src="https://images.unsplash.com/photo-1472491235688-bdc81a63246e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=05297d6a133548da4eac65f10cdfd37d&auto=format&fit=crop&w=700&q=60" alt="cat"/>
          <div className="meta-data">
            <div className="info btn" onClick={this.openProfile}></div>
            <h2>Meowskin, 2</h2>
            <p>Professional mouse chaser</p>
          </div>
          <article className="profile-data">
            <p>placeholder placeholder</p>
          </article>
        </main>
      </div>
    )
  }
}

export default App;
