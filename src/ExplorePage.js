import React, { Component } from 'react';
import './App.css';
import Header from './components/sub-components/header';
import Explore from './components/explore';
import Data from './data/explorePage';
class ExplorePage extends Component {
  render () {
    return (
      <div>
        <Header data={Data} />
        <Explore data={Data} />
      </div>
    );
  }
}

export default ExplorePage;
