import React, { Component } from 'react';
import {ActionGroup} from '../../styles/nav';
import {Button} from '../../styles/form';
class NavActions extends Component {
  render () {
    return (
      <ActionGroup>
        <Button hasIcon bordered><i className='far fa-thumbs-up' />Recommend</Button>
        <Button hasIcon bordered><i className='fab fa-telegram-plane' />Share</Button>
        <Button hasIcon bordered pull='right'><i className='fas fa-at' />Mention</Button>
      </ActionGroup>
    );
  }
}

export default NavActions;
