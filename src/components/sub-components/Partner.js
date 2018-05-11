import React, { Component } from 'react';
import glamorous from 'glamorous';
class Partner extends Component {
  render () {
    let Icon = glamorous.i({
      display: 'inline-block',
      margin: '0 15px',
      ':first-child': {
        marginLeft: 0
      },
      ':last-child': {
        marginRight: 0
      }
    });
    let elem = '';
    if (this.props.data.type === 'icon') {
      elem = <Icon className={this.props.data.classes} />;
    }
    return (elem);
  }
}

export default Partner;
