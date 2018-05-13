import React, { Component } from 'react';
import {HeaderList} from '../../styles/header';
import {UserIcon, VerticalSeparator} from '../../styles/icons';
import {MediaSpecificElement} from '../../styles/helpers';

class HeaderActions extends Component {
  render () {
    const getTextLink = (action) => (
      <a href={action.href} className={action.active ? 'active' : ''}>{action.label}</a>
    );

    const getIcon = (action) => (
      <span>
        <i className={action.icon.classes} />
        <MediaSpecificElement type='inline' hideM hideL>barcode</MediaSpecificElement>
      </span>
    );

    const getSeparator = (action) => (
      <MediaSpecificElement hideS>
        <VerticalSeparator />
      </MediaSpecificElement>
    );

    const getUser = (action) => (
      <MediaSpecificElement hideS>
        <UserIcon />
      </MediaSpecificElement>
    );
    return (
      <HeaderList isOpen={this.props.isOpen}>
        {this.props.data.map((action, ind) => {
          let elem = '';
          switch (action.type) {
            case 'textLink' :
              elem = getTextLink(action);
              break;
            case 'icon' :
              elem = getIcon(action);
              break;
            case 'separator' :
              elem = getSeparator();
              break;
            default:
              elem = getUser();
              break;
          }
          return (<li key={ind} >{elem}</li>);
        }
      )
      }
      </HeaderList>
    );
  }
}

export default HeaderActions;
