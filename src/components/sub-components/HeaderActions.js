import React, { Component } from 'react';
import {HeaderList} from '../../styles/header';
import {UserIcon, VerticalSeparator} from '../../styles/icons';

class HeaderActions extends Component {
  render () {
    return (
      <HeaderList>
        <li>
          <a>NewsFeed</a>
        </li>
        <li>
          <a className='active'>Explore</a>
        </li>
        <li>
          <i className='fas fa-barcode' />
        </li>
        <li>
          <VerticalSeparator />
        </li>
        <li>
          <i className='fa fa-hdd' />
        </li>
        <li>
          <i className='fa fa-bell' />
        </li>
        <li>
          <UserIcon />
        </li>
      </HeaderList>
    );
  }
}

export default HeaderActions;
