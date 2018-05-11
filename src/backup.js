import React, { Component } from 'react';
import './App.css';
import Header from './components/sub-components/header';
import Explore from './components/explore';
class App extends Component {
  render () {
    return (
      <div>
        <Header />
        <Explore />
        {/* <Header container={true} />
        <Explore container={true} /> */}
      </div>
    );
  }
}

export default App;

