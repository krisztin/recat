import React from 'react';
import '../css/App.css';
import testCats from '../test-cats';
import { Link } from 'react-router-dom';

class App extends React.Component {
  state = { cats: testCats };

  openProfile = e => {
    const content = document.querySelector('.profile-data');

    e.target.classList.toggle('close');
    content.classList.toggle('visible');
  };

  nextCat = () => {
    const cats = { ...this.state.cats };
    const catId = this.props.match.params.catId;
    let currentIndex = this.state.cats.findIndex(cat => cat.name.toLowerCase() === catId);
    const totalCats = Object.keys(cats).length - 1;
    currentIndex += 1;
    if (currentIndex > totalCats) {
      currentIndex = 1;
    }
    const nextCat = cats[currentIndex].name.toLowerCase();

    this.props.history.push(`/cats/${nextCat}`);
  };

  render() {
    const catId = this.props.match.params.catId;
    const i = this.state.cats.findIndex(cat => cat.name.toLowerCase() === catId);
    const { name, age, excerpt, image } = this.state.cats[i];

    return (
      <div className="cat">
        <header>
          <div className="logo-primary" />
        </header>
        <main>
          <div className="next profile-btn" onClick={this.nextCat} />
          {/* This really needs to be dealt with
              For some reason content: with emoji does not work
              So here's a CSS heavy hack for right now*/}
          <Link to="/match" className="match-btn">
            <div className="heart" />
          </Link>
          <img src={image} alt={name} />
          <div className="meta-data">
            <div className="info profile-btn" onClick={this.openProfile} />
            <h2>
              {name}, {age}
            </h2>
            <p>{excerpt}</p>
          </div>
          <article className="profile-data">
            <p>placeholder placeholder</p>
          </article>
        </main>
      </div>
    );
  }
}

export default App;
