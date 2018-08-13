import React, { Component } from 'react';
import '../css/App.css';
import Header from './Header';
import CatGallery from './CatGallery';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header title="Cats!"/>
        <CatGallery/>
      </div>
    );
  }
}

export default App;
