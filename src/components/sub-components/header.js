import React, { Component } from 'react';
import {Row, Col} from '../../styles/grid';
import {BHeader, Logo} from '../../styles/header';
import HeaderActions from './HeaderActions';
class Header extends Component {
  render () {
    return (
      <BHeader>
        <Row type={this.props.container ? 'container' : ''}>
          <Col s={12} m={6} TAlign='center' >
            <Logo bg={`${process.env.PUBLIC_URL}/ballprk-logo-white.png`} />
          </Col>
          <Col s={12} m={6}>
            <HeaderActions />
          </Col>
        </Row>
      </BHeader>
    );
  }
}

export default Header;
