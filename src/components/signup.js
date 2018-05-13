import React, { Component } from 'react';
import {Row, Col} from '../styles/grid';
import {Space} from '../styles/helpers';
import {FeatureBg} from '../styles/signup';
import SignupForm from './sub-components/SignupForm';

class Signup extends Component {
  render () {
    return (
      <Space mtM={0} mtS={50}>
        <Row>
          <Col align='left' l={6} >
            <SignupForm data={this.props.data.form} />
          </Col>
          <Col align='center' l={6}>
            <FeatureBg />
          </Col>
        </Row>
      </Space>
    );
  }
}

export default Signup;
