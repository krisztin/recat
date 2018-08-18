import React from 'react';
import '../css/Open.css';
import sampleCats from '../test-cats';

class Open extends React.Component {
  state = { cats: sampleCats }

  getCat = () => {
    const cats = {...this.state.cats}
    const firstCat = (cats[0].name).toLowerCase();
    this.props.history.push(`/cats/${firstCat}`)
  }

  render() { 
    return (
      <div className="open">
        <header>
          <div className="logo-white"></div>
        </header>
        <main className="center">
          <h2 className="jumbo">Swipe</h2>
          <h2 className="jumbo">Match</h2>
          <h2 className="jumbo">Adopt</h2>
          <button
            onClick={this.getCat}
            className="btn-dark-primary"
            aria-label="Start your search for cats">
            Start
          </button>
        </main>
      </div>
    )
  }
}

export default Open;