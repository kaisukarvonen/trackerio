import React, { Component } from "react";
import { View, StyleSheet, ActivityIndicator } from "react-native";
import { connect } from "react-redux";

class Loading extends Component {
  componentDidMount() {
    console.log("halooooo");
    console.log(this.props.loggedIn);
    if (this.props.loggedIn) {
      this.props.navigation.navigate("Tabs");
    } else {
      this.props.navigation.navigate("SignIn");
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" animating />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default connect(
  state => ({
    loggedIn: state.auth.loggedIn
  }),
  dispatch => ({})
)(Loading);
