import React, { Component } from 'react';
import {Input, SearchWrapper} from '../styles/form';
import {Space} from '../styles/helpers';
import {Row} from '../styles/grid';
import Card from '../components/sub-components/card';
class Athletes extends Component {
  constructor (props) {
    super(props);
    this.state = {
      Athletes: this.props.data,
      inputIsFocused: false
    };
    this.data = this.props.data;
    this.handleChange = this.handleChange.bind(this);
    this.getCard = this.getCard.bind(this);
    this.handleInputFocus = this.handleInputFocus.bind(this);
    this.handleInputBlur = this.handleInputBlur.bind(this);
  }
  getCard (athlete, ind) {
    return (<Card key={ind} variant='smallCard' data={athlete} />);
  }

  handleChange (event) {
    let key = event.target.value;
    let isValidString = true;
    try {
      new RegExp(key, 'i');
    } catch (e) {
      isValidString = false;
    }
    if (isValidString) {
      let reg = new RegExp(key, 'i');
      let updatedAthletes = this.data.filter((athlete) => (reg.test(athlete.name) || reg.test(athlete.club)) || reg.test(athlete.position));
      this.setState({Athletes: updatedAthletes});
    } else {     
    }
  }

  handleInputFocus (event) {
    this.setState({inputIsFocused: true});
  }
  handleInputBlur (event) {
    this.setState({inputIsFocused: false});
  }

  render () {
    return (
      <div>
        <Space mtS={15}>
          <SearchWrapper hasIcon focused={this.state.inputIsFocused}>
            <i className='fa fa-search fa-2x' />
            <Input type='text' hasIcon isFocused={this.state.inputIsFocused} onKeyUp={this.handleChange} onFocus={this.handleInputFocus} onBlur={this.handleInputBlur} placeholder='Search for Athletes' />
          </SearchWrapper>
        </Space>
        <Space mtS={15} scollable sSrollable maxHeight='calc( 100vh - 250px )'>
          <Row>
            {
            this.state.Athletes.map((athlete, ind) => {
              return this.getCard(athlete, ind);
            })
            }
          </Row>
        </Space>
      </div>
    );
  }
}

export default Athletes;
