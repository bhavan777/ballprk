import React, { Component } from 'react';
import {BodyWrapper} from '../styles/pageStyles';
import Nav from './sub-components/Nav';
import NavActions from './sub-components/NavActions';
import {Space} from '../styles/helpers';
import Athletes from './Athletes';
class Body extends Component {
  render () {
    return (
      <BodyWrapper>
        <Nav />
        <Space plS={20} prS={20} ptS={15}>
          <NavActions />
          <Athletes />
        </Space>
      </BodyWrapper>
    );
  }
}

export default Body;
