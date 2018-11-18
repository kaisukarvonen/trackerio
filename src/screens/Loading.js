import React, { Component } from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';

class Loading extends Component {
  componentDidMount() {
    if (this.props.user) {
      this.props.navigation.navigate('Tabs');
    } else {
      this.props.navigation.navigate('SignIn');
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
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default connect(
  state => ({
    user: state.auth.user
  }),
  dispatch => ({})
)(Loading);
