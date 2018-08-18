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
    const catId = this.props.match.params.catId;
    const i = this.state.cats.findIndex((cat) => (cat.name).toLowerCase() === catId);
    const { name, age, excerpt, image } = this.state.cats[i];
    
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
          <img src={image} alt={name}/>
          <div className="meta-data">
            <div className="info btn" onClick={this.openProfile}></div>
            <h2>{name}, {age}</h2>
            <p>{excerpt}</p>
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
