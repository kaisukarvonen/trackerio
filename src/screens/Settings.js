import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";
import SignOutButton from "../components/SignOutButton";

export default class Settings extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Settings</Text>
        <SignOutButton />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center"
  },
  title: {
    fontSize: 29,
    fontWeight: "600",
    textShadowOffset: { width: 3, height: 3 },
    textShadowRadius: 13,
    textShadowColor: "#999"
  }
});
