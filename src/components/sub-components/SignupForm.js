import React, { Component } from 'react';
import {Row, Col} from '../../styles/grid';
import {FormWrapper, FormHeading, FormTagline, Button} from '../../styles/form';
import {Space} from '../../styles/helpers';
import {ChevronIcon} from '../../styles/icons';
import InputGroup from '../sub-components/InputGroup';
class SignupForm extends Component {
  render () {
    return (
      <FormWrapper>
        <Space ptL={30}>
          <Row>
            <Col s={6} offsetS={3} TAlign='center'>
              <FormHeading>Let's get started</FormHeading>
              <FormTagline> We saw you across the room, we don't <br/>usually do this, but...</FormTagline>
              <Space mtL={30}>
                <Button type='block' bg='primary-gradient' hasIcon>
                  <ChevronIcon direction='left' color='white' className='stick-left' />
                  Prep School
                </Button>
              </Space>
            </Col>
          </Row>
          <Row>
            <Col s={6} offsetS={3}>
              <Space mtS={40}>
                <form>
                  {
                    this.props.data.map((input, ind) => (
                      <InputGroup data={input} key={ind} tabInd={ind} />
                    ))
                  }
                </form>
              </Space>
            </Col>
          </Row>
        </Space>
      </FormWrapper>
    );
  }
}

export default SignupForm;
