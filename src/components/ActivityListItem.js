import React, { Component } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import moment from 'moment';
import * as styles from '../styles';
import { weekDays } from '../utils/date';
import styled, { css } from 'styled-components';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class ActivityListItem extends Component {
  handlePress = () => {
    this.props.onPress();
  };

  getTime = duration => {
    const hours = duration.hours ? `${duration.hours} h` : '';
    const minutes = duration.minutes ? `${duration.minutes} min` : '';
    return `${hours} ${minutes}`;
  };

  render() {
    const { date, sport, duration, place } = this.props;
    return (
      <TouchableHighlight onPress={this.handlePress} underlayColor={styles.colors.background}>
        <ListItem>
          <View>
            <WeekDay>{weekDays[moment(date).format('e')]}</WeekDay>
            <DateText>{moment(date).format('DD.M')}</DateText>
          </View>
          <View>
            <Sport>{sport.name.toUpperCase()}</Sport>
            <InlineContainer>
              <Icon name="map-marker" size={18} color={styles.colors.lightGray} />
              <SmallText>{place}</SmallText>
            </InlineContainer>
          </View>
          <InlineContainer>
            <Icon name="clock-o" size={18} color={styles.colors.lightGray} />
            <SmallText>{this.getTime(duration)}</SmallText>
          </InlineContainer>
        </ListItem>
      </TouchableHighlight>
    );
  }
}

const plainText = css`
  font-weight: 200;
  font-family: AvenirLight;
  color: ${styles.colors.lightGray};
`;

const ListItem = styled.View`
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  margin-vertical: 17;
`;

const WeekDay = styled.Text`
  font-size: 23px;
  font-family: AvenirMedium;
  color: ${styles.colors.primary};
`;

const DateText = styled.Text`
  ${plainText};
  font-size: 17px;
`;

const Sport = styled.Text`
  ${plainText};
  font-size: 16px;
  letter-spacing: 1.2;
  color: #eee;
  padding-bottom: 5px;
`;

const SmallText = styled.Text`
  ${plainText};
  font-size: 17px;
  margin-start: 8px;
`;

const InlineContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;
