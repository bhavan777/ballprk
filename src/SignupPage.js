import React, { Component } from 'react';
import './App.css';
import Header from './components/sub-components/header';
import Signup from './components/signup';
import Data from './data/signupPage';

class SignupPage extends Component {
  render () {
    return (
      <div>
        <Header data={Data} />
        <Signup data={Data} />
      </div>
    );
  }
}

export default SignupPage;
