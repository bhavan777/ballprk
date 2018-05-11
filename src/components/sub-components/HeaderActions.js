import React, { Component } from 'react';
import {HeaderList} from '../../styles/header';
import {UserIcon, VerticalSeparator} from '../../styles/icons';
import {MediaSpecificElement} from '../../styles/helpers';

class HeaderActions extends Component {
  render () {
    return (
      <HeaderList isOpen={this.props.isOpen}>
        <li>
          <a>NewsFeed</a>
        </li>
        <li>
          <a className='active'>Explore</a>
        </li>
        <li>
          <i className='fas fa-barcode' />
          <MediaSpecificElement type='inline' hideM hideL>barcode</MediaSpecificElement>
        </li>
        <li>
          <MediaSpecificElement hideS>
            <VerticalSeparator />
          </MediaSpecificElement>
        </li>
        <li>
          <i className='fa fa-hdd' />
          <MediaSpecificElement type='inline' hideM hideL>Actions</MediaSpecificElement>
        </li>
        <li>
          <i className='fa fa-bell' />
          <MediaSpecificElement type='inline' hideM hideL>Notifications</MediaSpecificElement>
        </li>
        <li>
          <MediaSpecificElement hideS>
            <UserIcon />
          </MediaSpecificElement>
        </li>
      </HeaderList>
    );
  }
}

export default HeaderActions;
