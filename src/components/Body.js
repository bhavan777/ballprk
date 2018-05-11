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
        <Nav data={this.props.data.secondaryNav} />
        <Space plS={10} prS={10} ptS={15} plM={20} prM={20} ptM={15}>
          <NavActions data={this.props.data.NavActions} />
          <Athletes data={this.props.data.Athletes} />
        </Space>
      </BodyWrapper>
    );
  }
}

export default Body;
