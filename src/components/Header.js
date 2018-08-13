import React from 'react';

const Header = props => (
  <header className="App-header">
    <h1>{props.title} <span role="img" aria-hidden="true">&#x1F431;</span></h1>
  </header>
)

export default Header;