import React from 'react';
import '../css/App.css';
import Header from './Header';
import testCats from '../test-cats';
import CatPreview from './CatPreview';

class App extends React.Component {
state = { cats: testCats }
  render() {
    return (
      <div className="App">
        <Header title="Cats!"/>
        <div className="gallery">
          {Object.keys(this.state.cats).map(key => (
            <CatPreview
            key={key}
            index={key}
            data={this.state.cats[key]}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
