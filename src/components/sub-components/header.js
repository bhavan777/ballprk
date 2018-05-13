import React, { Component } from 'react';
import {Row, Col} from '../../styles/grid';
import {BHeader, Logo} from '../../styles/header';
import HeaderActions from './HeaderActions';
import {MediaSpecificElement, Space} from '../../styles/helpers';
import {UserIcon} from '../../styles/icons';

class Header extends Component {
  constructor (props) {
    super(props);
    this.state = {
      isMenuOpen: false
    };
    this.toggleHamburger = this.toggleHamburger.bind(this);
  }

  toggleHamburger (event) {
    this.setState({isMenuOpen: !this.state.isMenuOpen});
  }
  render () {
    return (
      <BHeader>
        <Row type={this.props.container ? 'container' : ''}>
          <Col s={12} m={6} TAlign='center' >
            <Row>
              <Col s={2} TAlign='center'>
                <MediaSpecificElement hideM hideL>
                  <UserIcon leftSticky />
                </MediaSpecificElement>
              </Col>
              <Col s={8} m={12}>
                <Logo bg={`${process.env.PUBLIC_URL}/ballprk-logo-white.png`} />
              </Col>
              <Col s={2} TAlign='center'>
                <MediaSpecificElement hideM hideL>
                  <Space mtS={15}>
                    <i onClick={this.toggleHamburger} className='fas fa-bars fa-2x' />
                  </Space>
                </MediaSpecificElement>
              </Col>
            </Row>
          </Col>
          <Col s={12} m={6}>
            <HeaderActions data={this.props.data.header} isOpen={this.state.isMenuOpen} />
          </Col>
        </Row>
      </BHeader>
    );
  }
}

export default Header;
