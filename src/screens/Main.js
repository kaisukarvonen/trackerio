import React, { Component } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import ActivityListItem from "../components/ActivityListItem";
import SignOutButton from "../components/SignOutButton";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as activityActions from "../dux/activities";
import * as categoryActions from "../dux/categories";
import * as sportActions from "../dux/sports";

class Main extends Component {
  static navigationOptions = {
    headerRight: <SignOutButton />,
    title: "Aktiviteetit",
    headerLeft: <View />,
    headerTitleStyle: { alignSelf: "center", paddingStart: 67 }
  };

  state = {};

  componentDidMount() {
    this.props.fetchActivities(this.props.user);
    this.props.fetchSports();
    this.props.fetchCategories();
  }

  extractKey = activity => activity.id.toString();

  getItemLayout = (data, index) => ({
    length: 60 + StyleSheet.hairlineWidth,
    offset: (60 + StyleSheet.hairlineWidth) * index,
    index
  });

  renderActivityItem = ({ item: activity }) => {
    return (
      <ActivityListItem
        sports={this.props.sports}
        {...activity}
        onPress={this.handleActivityPress(activity)}
      />
    );
  };

  handleActivityPress = activity => () => {
    const updated = {
      ...activity,
      sport: this.props.sports.find(s => s.id === activity.sport_id).name
    };
    this.props.navigation.navigate("Activity", { activity: updated });
  };

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          style={styles.activitiesList}
          data={this.props.activities}
          renderItem={this.renderActivityItem}
          keyExtractor={this.extractKey}
          getItemLayout={this.getItemLayout}
          ItemSeparatorComponent={<View style={styles.separator} />}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#dfdfdf"
  },
  activitiesList: {
    flex: 1
  },
  separator: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: "#000"
  }
});

export default connect(
  state => ({
    activities: state.activities.activities,
    sports: state.sports.sports,
    categories: state.categories.categories,
    loggedIn: state.auth.loggedIn,
    user: state.auth.user
  }),
  dispatch =>
    bindActionCreators(
      {
        ...activityActions,
        ...categoryActions,
        ...sportActions
      },
      dispatch
    )
)(Main);
