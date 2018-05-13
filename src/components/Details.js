import React, { Component } from 'react';
import {Row, Col} from '../styles/grid';
import Card from './sub-components/card';
import Action from './Action';
import {Space} from '../styles/helpers';
import {DetailsWrapper} from '../styles/pageStyles';
import {Text} from '../styles/typo';
import Partner from './sub-components/Partner';
class Details extends Component {
  render () {
    return (
      <DetailsWrapper>
        <Card data={this.props.data.banner} />
        <Space ptS={50} scollable maxHeight='60vh'>
          <Row>
            <Col TAlign='center' s={10} offsetS={1}>
              <Space mbS={25}>
                <Text variant='h4' clr-variant='dark1' weight='sbd'>{this.props.data.Details.club.name}</Text>
                <Text variant='h5' clr-variant='light2' weight='rg'> {this.props.data.Details.club.country} </Text>
              </Space>
              <Row>
                {
                  this.props.data.Details.stats.map((stat, ind) => {
                    return (
                      <Col TAlign='center' s={4} key={ind}>
                        <Text variant='h4' clr-variant='dark' weight='sbd'>{stat.count}</Text>
                        <Text variant='h5' clr-variant='light' weight='sbd'>{stat.label}</Text>
                      </Col>
                    );
                  }
                )
                }
              </Row>
              <Space mtS={20}>
                <Action {...this.props.data.Details.statsAction} />
              </Space>
            </Col>
          </Row>
          <Space mtS={25}>
            <Row>
              <Col s={10} offsetS={1}>
                <Action {...this.props.data.Details.club.action} />
                <Space mtS={15}>
                  <Text clr-variant='light2' weight='rg'>{this.props.data.Details.club.description}</Text>
                </Space>
                <Space mtS={15} mbS={50}>
                  <Text variant='h4' tAlign='center' weight='sbd'>{this.props.data.Details.Partners.heading}</Text>
                  <Space mtS={20}>
                    <Row>
                      <Col TAlign='center'>
                        {
                          this.props.data.Details.Partners.companies.map((company, ind) => (
                            <Partner data={company} key={ind} />
                          ))
                        }
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
