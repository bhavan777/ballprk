import React, { Component } from 'react';
import {ActionGroup} from '../../styles/nav';
import {Button} from '../../styles/form';
class NavActions extends Component {
  render () {
    return (
      <ActionGroup>
        {this.props.data.map((action, ind) => (
          <Button key={ind} variant='medium' hasIcon bordered pull={action.pull}>
            <i className={action.icon.iconClasses} />
            {action.label}
          </Button>
        ))}
      </ActionGroup>
    );
  }
}

export default NavActions;
