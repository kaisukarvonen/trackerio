import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
  Platform
} from "react-native";
import { RectButton } from "react-native-gesture-handler";
// import authService from "../services/authService";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as authActions from "../dux/auth";

const IS_ANDROID = Platform.OS === "android";

class SignIn extends Component {
  state = { username: "", password: "" };

  handleInput = key => value => {
    this.setState(state => ({
      [key]: value
    }));
  };

  handleSignIn = async () => {
    const { username, password } = this.state;
    if (username && password) {
      this.props.login(username);
      this.props.navigation.navigate("Tabs");
    }
  };

  render() {
    return (
      <KeyboardAvoidingView
        style={styles.container}
        enabled={!IS_ANDROID}
        behavior="padding"
      >
        <View style={styles.container}>
          <Text style={styles.title}>Trackerio</Text>
          <View>
            <TextInput
              value={this.state.username}
              style={styles.input}
              onChangeText={this.handleInput("username")}
              placeholder="Käyttäjätunnus"
              autoCapitalize="none"
            />
            <TextInput
              value={this.state.password}
              style={styles.input}
              onChangeText={this.handleInput("password")}
              placeholder="Salasana"
              secureTextEntry
            />
          </View>
          <RectButton style={styles.button} onPress={this.handleSignIn}>
            <Text style={styles.buttonText}>Kirjaudu sisään</Text>
          </RectButton>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#dfdfdf"
  },
  title: {
    fontSize: 29,
    fontWeight: "600",
    textShadowOffset: { width: 3, height: 3 },
    textShadowRadius: 13,
    textShadowColor: "#999"
  },
  button: {
    borderRadius: 26,
    paddingVertical: 12,
    paddingHorizontal: 38,
    ...Platform.select({
      ios: {
        backgroundColor: "tomato"
      },
      android: {
        backgroundColor: "#82B3AE"
      },
      default: {}
    })
  },
  buttonText: {
    fontSize: 22,
    color: "#fff"
  },
  input: {
    width: 290,
    padding: 8,
    fontSize: 19,
    borderBottomColor: "#666",
    borderBottomWidth: 1
  }
});

export default connect(
  state => ({}),
  dispatch =>
    bindActionCreators(
      {
        ...authActions
      },
      dispatch
    )
)(SignIn);
