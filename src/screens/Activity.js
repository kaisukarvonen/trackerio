import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import moment from "moment";
import * as activityActions from "../dux/activities";

class Activity extends Component {
  static navigationOptions = ({ navigation }) => {
    const { activity } = navigation.state.params;
    return {
      title: `${activity.sport} ${moment(activity.time_of_completion).format(
        "DD.MM.YYYY"
      )}`,

      headerRight: <View />
    };
  };

  state = {};

  render() {
    const activity = this.props.navigation.getParam("activity", {});
    return <View />;
  }
}

export default connect(
  state => ({
    sports: state.sports.sports,
    categories: state.categories.categories
  }),
  dispatch =>
    bindActionCreators(
      {
        ...activityActions
      },
      dispatch
    )
)(Activity);

const styles = StyleSheet.create({});
