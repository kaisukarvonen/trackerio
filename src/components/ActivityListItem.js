import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableHighlight
} from "react-native";
import moment from "moment";

export default class ActivityListItem extends Component {
  handlePress = () => {
    this.props.onPress();
  };

  render() {
    const {
      time_of_completion,
      sport_id,
      duration_hours,
      duration_minutes,
      sports
    } = this.props;
    return (
      <TouchableHighlight onPress={this.handlePress} underlayColor="red">
        <View style={styles.container}>
          <Text>{moment(time_of_completion).format("DD.MM")}</Text>
          <Text>{sports.find(s => s.id === sport_id).name}</Text>
          <Text>{`${duration_hours} h ${duration_minutes} min`}</Text>
        </View>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
    justifyContent: "space-around",
    flexDirection: "row"
  }
});
