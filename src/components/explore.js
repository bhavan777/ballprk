import React, { Component } from 'react';
import {Row, Col} from '../styles/grid';
import Details from './Details';
import Body from './Body'
class Explore extends Component {
  render () {
    return (
      <Row type={this.props.container ? 'container' : ''}>
        <Col align='left' s={4} >
          <Details />
        </Col>
        <Col align='center' s={8} > 
          <Body />
        </Col>
      </Row>
    );
  }
}

export default Explore;
