import React, { Component } from 'react';
import {SCard, SCardImage, SCardLogo, SCardButton} from '../../styles/cards';
import {Row, Col} from '../../styles/grid';
import {Space} from '../../styles/helpers';
import {Text} from '../../styles/typo';
import {Button} from '../../styles/form';
class Card extends Component {
  render () {
    const getCardBody = (data) => {
      let body = '';
      if (this.props.variant === 'smallCard') {
        body = (
          <Space mbS={20}>
            <Row>
              <Col TAlign='center' l={8} offsetL={2}>
                <Space mtS={35} mbS={15}>
                  <Text variant='h5' clr-variant='dark' weight='sbd'>{data.name}</Text>
                  <Text variant='small' clr-variant='light3' weight='lt'> {data.position}</Text>
                  <Text variant='small' clr-variant='light3' weight='lt'> {data.club}</Text>
                </Space>
              </Col>
              <Col withPadding TAlign='center' l={5} offsetL={1}>
                <Button type='block' bg='primary'>Message</Button>
              </Col>
              <Col withPadding TAlign='center' l={5}>
                <Button type='block' bg='secondary'>Book Session</Button>
              </Col>
            </Row>
          </Space>
        );
      }
      return (
        body
      );
    };
    return (
      <SCard variant={this.props.variant}>
        <Row relative>
          <Col>
            <SCardImage bg={`${process.env.PUBLIC_URL}/${this.props.data.bannerImg}`} />
            <SCardLogo variant={this.props.variant} bg={`${process.env.PUBLIC_URL}/${this.props.data.bannerLogo}`} />
            <SCardButton variant='medium' pull='right'>Follow</SCardButton>
          </Col>
        </Row>
        {getCardBody(this.props.data)}
      </SCard>
    );
  }
}

export default Card;
