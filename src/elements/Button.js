import React, { Component } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import * as styles from '../styles';
import styled, { css } from 'styled-components';

class ButtonClass extends Component {
  render() {
    return (
      <CustomButton style={this.props.style} onPress={this.props.onPress} color={this.props.color}>
        <ButtonText>{this.props.content}</ButtonText>
      </CustomButton>
    );
  }
}

const CustomButton = styled.TouchableOpacity`
  border-radius: 26;
  padding-vertical: 12;
  padding-horizontal: 38;
  background-color: ${props => styles.colors[props.color] || styles.colors.primary};
`;

const ButtonText = styled.Text`
  font-size: 20;
  color: #fff;
  font-family: AvenirLight;
`;

export const Button = styled(ButtonClass)``;
