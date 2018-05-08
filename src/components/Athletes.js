import React, { Component } from 'react';
import {Input, InputWrapper} from '../styles/form';
import {Space} from '../styles/helpers';
import {Row} from '../styles/grid';
import Card from '../components/sub-components/card';
import Data from '../data/data';
class Athletes extends Component {
  constructor (props) {
    super(props);
    this.state = {
      Athletes: Data.Athletes
    };
    this.data = Data;
    this.handleChange = this.handleChange.bind(this);
    this.getCard = this.getCard.bind(this);
  }
  getCard (athlete, ind) {
    return (<Card key={ind} variant='smallCard' data={athlete} />);
  }

  handleChange (event) {
    let key = event.target.value;
    let reg = new RegExp(key, 'i');
    let updatedAthletes = this.data.Athletes.filter((athlete) => (reg.test(athlete.name) || reg.test(athlete.club)) || reg.test(athlete.position));
    this.setState({Athletes: updatedAthletes});
  }
  render () {
    return (
      <div>
        <Space mtS={15}>
          <InputWrapper hasIcon>
            <i className='fa fa-search fa-2x' />
            <Input type='text' onKeyUp={this.handleChange} placeholder='Search for Athletes' />
          </InputWrapper>
        </Space>
        <Space mtS={15} scollable maxHeight='calc( 100vh - 250px )'>
          <Row>
            {
            this.state.Athletes.map((athlete, ind) => {
              return this.getCard(athlete, ind);
            })
            }
        </Space>
      </div>
    );
  }
}

export default Athletes;
