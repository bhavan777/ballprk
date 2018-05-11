import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router-dom';
class Home extends Component {
  render () {
    return (
      <div>
        <center>
          <h1>Home </h1>
          <Link to='/explore' target='_blank'>Explore Page </Link>
          <Link to='/signup' target='_blank'>Signup page </Link>
        </center>        
      </div>
    );
  }
}

export default Home;
