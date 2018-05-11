import React, { Component } from 'react';
import {Row, Col} from '../styles/grid';
import Details from './Details';
import Body from './Body';
import {Space} from '../styles/helpers';

class Explore extends Component {
  render () {
    return (
      <Space mtM={0} mtS={50}>
        <Row type={this.props.container ? 'container' : ''}>
          <Col align='left' l={4} s={12} >
            <Details data={this.props.data} />
          </Col>
          <Col align='center' l={8} s={12}>
            <Body data={this.props.data} />
          </Col>
        </Row>
      </Space>
    );
  }
}

export default Explore;
