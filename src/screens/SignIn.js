import React, { Component } from 'react';
import { View, Platform } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as authActions from '../dux/auth';
import * as styles from '../styles';
import styled, { css } from 'styled-components';
import { CustomTextInput } from '../elements/CustomTextInput';
import { Button } from '../elements/Button';
import LinearGradient from 'react-native-linear-gradient';

const IS_ANDROID = Platform.OS === 'android';

class SignIn extends Component {
  state = { username: '', password: '' };

  componentDidUpdate = prevProps => {
    if (prevProps.user !== this.props.user && this.props.user) {
      this.props.navigation.navigate('Tabs');
    }
  };

  handleInput = (value, key) => {
    this.setState({
      [key]: value
    });
  };

  handleSignIn = async () => {
    const { username, password } = this.state;
    if (!!username && !!password) {
      this.props.logIn({ username, password });
    }
  };

  render() {
    return (
      <LinearGradient colors={['#49536A', '#4c546d', '#6D697C', '#988d9c', '#B2A8AF']} style={{ flex: 1 }}>
        <StyledKeyboardAvoidingView enabled={!IS_ANDROID} behavior="padding">
          <MainView>
            <Title>Trackerio</Title>
            <View>
              <CustomTextInput
                value={this.state.username}
                onChangeText={val => this.handleInput(val, 'username')}
                icon="user"
                placeholder="Käyttäjätunnus"
              />
              <CustomTextInput
                value={this.state.password}
                onChangeText={val => this.handleInput(val, 'password')}
                icon="lock"
                secureTextEntry
                placeholder="Salasana"
              />
            </View>
            <Button onPress={this.handleSignIn} content="Kirjaudu sisään" />
          </MainView>
        </StyledKeyboardAvoidingView>
      </LinearGradient>
    );
  }
}

const mainContainer = css`
  display: flex;
  flex: 1;
  justify-content: space-evenly;
  align-items: center;
`;

const MainView = styled.View`
  ${mainContainer};
`;

const StyledKeyboardAvoidingView = styled.KeyboardAvoidingView`
  ${mainContainer};
`;

const Title = styled.Text`
  font-size: 45;
  letter-spacing: 2;
  color: ${styles.colors.primary};
  font-weight: 200;
  font-family: AvenirMedium;
`;

// const xstyles = StyleSheet.create({
//   button: {
//     borderRadius: 26,
//     paddingVertical: 12,
//     paddingHorizontal: 38,
//     ...Platform.select({
//       ios: {
//         backgroundColor: 'tomato'
//       },
//       android: {
//         //#dd9f7e
//         backgroundColor: '#dd9f7e'
//       },
//       default: {}
//     })
//   },
//   buttonText: {
//     fontSize: 21,
//     color: '#fff',
//     fontFamily: 'AvenirLight'
//   }
// });

export default connect(
  state => ({
    user: state.auth.user
  }),
  dispatch =>
    bindActionCreators(
      {
        ...authActions
      },
      dispatch
    )
)(SignIn);
