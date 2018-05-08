import React, { Component } from 'react';
import {NavWrapper, NavListItem} from '../../styles/nav';
class Nav extends Component {
  render () {
    return (
        <NavWrapper>
          <NavListItem>
            <a>Posts</a>
          </NavListItem>
          <NavListItem isActive>
            <a>our athletes</a>
          </NavListItem>
          <NavListItem>
            <a>photos</a>
          </NavListItem>
          <NavListItem>
            <a>videos</a>
          </NavListItem>
          <NavListItem>
            <a>Events</a>
          </NavListItem>
        </NavWrapper>
    );
  }
}

export default Nav;
