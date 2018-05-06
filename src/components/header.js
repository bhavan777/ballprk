import React, { Component } from 'react';
import {Container, Col} from '../styles/grid';
import {BHeader, Logo} from '../styles/header';
import HeaderActions from './HeaderActions';
class Header extends Component {
  render () {
    return (
      <BHeader>
        <Container>
          <Col align='left' s={6} >
            <Logo bg={`${process.env.PUBLIC_URL}/ballprk-logo-white.png`} />
          </Col>
          <Col align='right' s={6} >
            <HeaderActions />
          </Col>
        </Container>
      </BHeader>
    );
  }
}

export default Header;
