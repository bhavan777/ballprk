import React, { Component } from 'react';
import {Row, Col} from '../styles/grid';
import Card from './sub-components/card';
import {Button} from '../styles/form';
import {Space} from '../styles/helpers';
import {DetailsWrapper} from '../styles/pageStyles';
import {Link, Text} from '../styles/typo';
import Data from '../data/data';
class Details extends Component {
  render () {
    return (
      <DetailsWrapper>
        <Card data={Data.banner} />
        <Space ptS={50} scollable maxHeight='60vh'>
          <Row>
            <Col TAlign='center' s={10} offsetS={1}>
              <Space mbS={25}>
                <Text variant='h4' clr-variant='dark1' weight='sbd'>NFL Canada</Text>
                <Text variant='h5' clr-variant='light2' weight='rg'> Canada </Text>
              </Space>
              <Row>
                <Col TAlign='center' s={4}>
                  <Text variant='h4' clr-variant='dark' weight='sbd'>7Mil</Text>
                  <Text variant='h5' clr-variant='light' weight='sbd'>Posts</Text>
                </Col>
                <Col TAlign='center' s={4}>
                  <Text variant='h4' clr-variant='dark' weight='sbd'>17546</Text>
                  <Text variant='h5' clr-variant='light' weight='sbd'>Followers</Text>
                </Col>
                <Col TAlign='center' s={4}>
                  <Text variant='h4' clr-variant='dark' weight='sbd'>312</Text>
                  <Text variant='h5' clr-variant='light' weight='sbd'>Following</Text>
                </Col>
              </Row>
              <Space mtS={20}>
                <Button variant='standard' type='block' bg='primary'>Message</Button>
              </Space>
            </Col>
          </Row>
          <Space mtS={25}>
            <Row>
              <Col s={10} offsetS={1}>
                <Link href='https://canada.nfl.com' target='_blank'><i className='fas fa-globe' />https://canada.nfl.com</Link>
                <Space mtS={15}>
                  <Text clr-variant='light2' weight='rg'>The National Football League (NFL) is a professional American football league consisting of 32 teams, divided equally between the National Football Conference (NFC) and the American Football Conference (AFC). The NFL is one of the four major professional sports leagues in North America, and the highest professional level of American football in the world.[3] The NFL's 17-week regular season runs from early September to late December, with each team playing 16 games and having one bye week.</Text>
                </Space>
                <Space mtS={15} mbS={50}>
                  <Text variant='h4' tAlign='center' weight='sbd'>Our Partners</Text>
                  <Space mtS={20}>
                    <Row>
                      <Col s={8} offsetS={2}>
                        <Col s={3} TAlign='center'>
                          <i className='fab fa-3x fa-facebook-square' />
                        </Col>
                        <Col s={3} TAlign='center'>
                          <i className='fab fa-3x fa-twitch' />
                        </Col>
                        <Col s={3} TAlign='center'>
                          <i className='fab fa-3x fa-twitter-square' />
                        </Col>
                        <Col s={3} TAlign='center'>
                          <i className='fab fa-3x fa-cc-visa' />
                        </Col>
                      </Col>
                    </Row>
                  </Space>
                </Space>
              </Col>
            </Row>
          </Space>
        </Space>
      </DetailsWrapper>
    );
  }
}

export default Details;
