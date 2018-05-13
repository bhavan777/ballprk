import React, { Component } from 'react';
import {InputWrapper, Input, InputLabel} from '../../styles/form';
import {Row, Col} from '../../styles/grid';
import DropDown from '../sub-components/dropdown';
import Tabs from '../sub-components/tabs';
class InputGroup extends Component {
  render () {
    let El = '';
    if (this.props.data.type === 'text') {
      El = (
        <InputWrapper leftBordered={this.props.data.bordered}>
          <InputLabel>{this.props.data.label}</InputLabel>
          <Input tabIndex={this.props.tabInd} variant='formInput' placeholder={this.props.data.placeholder} />
        </InputWrapper>
      );
    } else if (this.props.data.type === 'dropdown') {
      El = (<DropDown tabKey={this.props.tabInd} hasLabel={this.props.data.label} leftBordered={this.props.data.bordered} data={this.props.data} />);
    } else if (this.props.data.type === 'dropdownGroup') {
      El = (
        <InputWrapper leftBordered={this.props.data.bordered}>
          <InputLabel>{this.props.data.label}</InputLabel>
          <Row>
            {
            this.props.data.dropdowns.map((dd, ind) => (
              <Col s={dd.colSize} key={ind}>
                <DropDown hasLabel={dd.label} bordered noPadding tabKey={this.props.tabInd + ind} data={dd} />
              </Col>
          ))
            }
          </Row>
        </InputWrapper>
      );
    } else if (this.props.data.type === 'tabs') {
      El = (<Tabs data={this.props.data} />);
    }
    return (El);
  }
}

export default InputGroup;
