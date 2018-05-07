import React, { Component } from 'react';
import {SCard, SCardImage, SCardLogo, SCardButton} from '../styles/cards';
import {Row, Col} from '../styles/grid';
import {Space} from '../styles/helpers';

class Card extends Component {
  render () {
    return (
      <SCard>
        <Row>
          <Col>
            <SCardImage src={`${process.env.PUBLIC_URL}/2018-NFL-Combine.png`} />
            <SCardLogo src={`${process.env.PUBLIC_URL}/nfl-logo.png`} />
            <SCardButton variant='medium' pull='right'>Follow</SCardButton>
          </Col>
        </Row>
      </SCard>
    );
  }
}

export default Card;
