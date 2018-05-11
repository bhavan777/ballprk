import React, { Component } from 'react';
import {Button} from '../styles/form';
import {Link} from '../styles/typo';

class Action extends Component {
  render () {
    let elem = '';
    if (this.props.elementType === 'button') {
      elem = (
        <Button variant={this.props.variant} bg={this.props.bg} type={this.props.type}>
          {this.props.label}
        </Button>
      );
    }
    if (this.props.elementType === 'textLink') {
      elem = (
        <Link href={this.props.href} target={this.props.target}><i className={this.props.iconClasses} />{this.props.label}</Link>
      );
    }
    return (elem);
  }
}

export default Action;
