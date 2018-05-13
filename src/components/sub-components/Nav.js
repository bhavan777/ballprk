import React, { Component } from 'react';
import {NavWrapper, NavListItem} from '../../styles/nav';
class Nav extends Component {
  render () {
    return (
      <NavWrapper>
        {this.props.data.map((item, ind) => (
          <NavListItem isActive={item.active} key={ind}>
            <a href={item.href}>{item.label}</a>
          </NavListItem>
        ))}
      </NavWrapper>
    );
  }
}

export default Nav;
