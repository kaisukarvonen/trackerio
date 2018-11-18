import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { withNavigation } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as authActions from '../dux/auth';

class SignOutButton extends Component {
  handleSignOut = () => {
    this.props.logout();
    this.props.navigation.navigate('SignIn');
  };

  render() {
    return (
      <RectButton onPress={this.handleSignOut}>
        <Icon name="sign-out" size={24} style={styles.signOutButton} />
      </RectButton>
    );
  }
}

const styles = StyleSheet.create({
  signOutButton: {
    marginEnd: 16
  }
});

// export default withNavigation(SignOutButton);
export default withNavigation(
  connect(
    state => ({}),
    dispatch =>
      bindActionCreators(
        {
          ...authActions
        },
        dispatch
      )
  )(SignOutButton)
);
