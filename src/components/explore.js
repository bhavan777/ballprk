import React, { Component } from 'react';
import {Row, Col} from '../styles/grid';
import Details from './Details';
import Body from './Body';

class Explore extends Component {
  render () {
    return (
      <Row type={this.props.container ? 'container' : ''}>
        <Col align='left' l={4} s={12} >
          <Details />
        </Col>
        <Col align='center' l={8} s={12}>
          <Body />
        </Col>
      </Row>
    );
  }
}

export default Explore;
