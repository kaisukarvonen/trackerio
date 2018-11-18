import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import ActivityListItem from '../components/ActivityListItem';
import SignOutButton from '../components/SignOutButton';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as activityActions from '../dux/activities';
import * as categoryActions from '../dux/categories';
import * as sportActions from '../dux/sports';
import * as styles from '../styles';
import styled from 'styled-components';
import LinearGradient from 'react-native-linear-gradient';

class Main extends Component {
  static navigationOptions = {
    headerRight: <SignOutButton />,
    title: 'Aktiviteetit',
    headerLeft: <View />,
    ...styles.headerStyles
  };

  state = {};

  componentDidMount() {
    this.props.fetchActivities(this.props.user._id);
    this.props.fetchSports();
    this.props.fetchCategories();
  }

  extractKey = activity => activity._id;

  getItemLayout = (data, index) => ({
    length: 80 + StyleSheet.hairlineWidth,
    offset: (80 + StyleSheet.hairlineWidth) * index,
    index
  });

  renderActivityItem = ({ item: activity }) => {
    return <ActivityListItem {...activity} onPress={this.handleActivityPress(activity)} />;
  };

  handleActivityPress = activity => () => {
    this.props.navigation.navigate('Activity', { activity });
  };

  render() {
    return (
      <LinearGradient colors={styles.gradients} style={{ flex: 1 }}>
        <CustomFlatList
          data={this.props.activities}
          renderItem={this.renderActivityItem}
          keyExtractor={this.extractKey}
          getItemLayout={this.getItemLayout}
          ItemSeparatorComponent={() => <Separator />}
        />
      </LinearGradient>
    );
  }
}

const Separator = styled.View`
  height: ${StyleSheet.hairlineWidth};
  width: 95%;
  margin: auto;
  background-color: ${styles.colors.lightGray};
`;

const CustomFlatList = styled.FlatList`
  display: flex;
`;

export default connect(
  state => ({
    activities: state.activities.activities,
    sports: state.sports.sports,
    categories: state.categories.categories,
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
