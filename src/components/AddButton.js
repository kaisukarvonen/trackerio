import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { withNavigation } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as styles from '../styles';

class AddButton extends Component {
  handleAddClick = () => {
    const { routeName } = this.props.navigation.state;
    let route = '';
    switch (routeName) {
      case 'Main':
        route = 'NewActivity';
    }
    this.props.navigation.navigate(route);
  };

  render() {
    return (
      <RectButton onPress={this.handleAddClick}>
        <Icon name="plus-circle" size={26} style={{ marginEnd: 16 }} color={'white'} />
      </RectButton>
    );
  }
}

export default withNavigation(AddButton);
