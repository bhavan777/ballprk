import React, { Component } from 'react';
import './App.css';
import Header from './components/sub-components/header';
import Explore from './components/explore';
class SignupPage extends Component {
  render () {
    return (
      <div>
        <Header container={true} />
        <Explore container={true} />
      </div>
    );
  }
}

export default SignupPage;
