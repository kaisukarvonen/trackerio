import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import * as styles from '../styles';
import styled, { css } from 'styled-components';
import Icon from 'react-native-vector-icons/FontAwesome';
class TextInputClass extends Component {
  handleInput = value => {
    this.props.onChangeText(value);
  };

  render() {
    return (
      <View>
        {this.props.label && <Label>{this.props.label}</Label>}
        <Container style={this.props.style}>
          {this.props.icon && <Icon name={this.props.icon} color={styles.colors.orange} size={24} style={{ paddingEnd: 8 }} />}
          <StyledTextInput
            value={this.props.value}
            onChangeText={val => this.handleInput(val)}
            placeholder={this.props.placeholder}
            placeholderTextColor={'#79757a'}
            autoCapitalize="none"
            secureTextEntry={this.props.secureTextEntry}
          />
        </Container>
      </View>
    );
  }
}

const Label = styled.Text`
  color: ${styles.colors.lightGray};
  font-family: AvenirLight;
  font-size: 16;
`;

const Container = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  border-bottom-color: ${styles.colors.lightGray};
  border-bottom-width: 1;
  margin-bottom: 15px;
`;

const StyledTextInput = styled.TextInput`
  font-size: 20;
  font-weight: 200;
  padding-vertical: 0;
  color: #eee;
  font-family: AvenirLight;
  width: 290px;
`;

export const CustomTextInput = styled(TextInputClass)``;
