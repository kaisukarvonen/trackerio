import React, { Component } from 'react';
import { RectButton } from 'react-native-gesture-handler';
import { withNavigation } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';

class BackButton extends Component {
  handleBackClick = () => {
    this.props.navigation.goBack();
  };

  render() {
    return (
      <RectButton onPress={this.handleBackClick}>
        <Icon name="arrow-left" size={24} style={{ marginStart: 16 }} color={'white'} />
      </RectButton>
    );
  }
}

export default withNavigation(BackButton);
