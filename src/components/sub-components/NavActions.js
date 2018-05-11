import React, { Component } from 'react';
import {ActionGroup} from '../../styles/nav';
import {Button} from '../../styles/form';
class NavActions extends Component {
  render () {
    return (
      <ActionGroup>
        {this.props.data.map((action) => (
          <Button hasIcon bordered pull={action.pull}>
            <i className={action.icon.iconClasses} />
            {action.label}
          </Button>
        ))}
      </ActionGroup>
    );
  }
}

export default NavActions;
