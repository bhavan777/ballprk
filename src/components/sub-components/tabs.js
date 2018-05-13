import React, { Component } from 'react';
import {TabsWrapper, TabGroup, Tab, TabRelatedInputGroup} from '../../styles/tabs';
import {InputLabel, Input} from '../../styles/form';

class Tabs extends Component {
  constructor (props) {
    super(props);
    const relatedInputs = [];
    this.props.data.options.map((input) => {
      if (input.relatedInput) {
        relatedInputs.push({id: input.relatedInputId, show: false});
      }
      return false;
    });
    this.state = {
      relateInputs: relatedInputs
    };
  }

  handleClick (tag, e) {
    console.log(tag);
    let newState = this.state.relateInputs.map((inp) => {
      if (inp.id === tag) {
        inp.show = true;
      } else {
        inp.show = false;
      }
    });
    this.setState(newState);
  }
  render () {
    return (
      <TabsWrapper>
        <InputLabel>{this.props.data.label}</InputLabel>
        <TabGroup>
          {
            this.props.data.options.map((radio, ind) => (
              <Tab key={ind}>
                <input type='radio' name={this.props.data.name} onClick={this.handleClick.bind(this, radio.relatedInputId || '')} id={`radio${ind}`} />
                <label htmlFor={`radio${ind}`}>{radio.label}</label>
              </Tab>
            ))
          }
        </TabGroup>
        <TabRelatedInputGroup>
          {
            this.props.data.options.map((radio, ind) => {
              let hasInput = false;
              let El = '';
              let _show = '';
              this.state.relateInputs.map((inp) => {
                if (inp.id === radio.relatedInputId) { hasInput = true; _show = inp.show; }
                return false;
              });
              if (hasInput) {
                El = <Input key={ind} tabIndex={this.props.tabInd} hide={!_show} variant='formInput' ref={radio.relatedInputId} placeholder={radio.relatedInput.placeholder} />;
              }
              return (El);
            }
            )
          }
        </TabRelatedInputGroup>
      </TabsWrapper>
    );
  }
}

export default Tabs;
