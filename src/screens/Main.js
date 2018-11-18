import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import ActivityListItem from '../components/ActivityListItem';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as activityActions from '../dux/activities';
import * as categoryActions from '../dux/categories';
import * as sportActions from '../dux/sports';
import * as styles from '../styles';
import styled from 'styled-components';
import LinearGradient from 'react-native-linear-gradient';
import AddButton from '../components/AddButton';
import moment from 'moment';
import { getTime } from '../utils/time';

class Main extends Component {
  static navigationOptions = {
    headerRight: <AddButton />,
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

  weeklyStats = () => {
    const activities = [...this.props.activities];
    activities.reverse();
    const startOfWeek = moment().startOf('isoWeek');
    let hours = 0;
    let minutes = 0;
    const sports = [];
    activities.forEach(a => {
      if (moment(a.date).isSameOrAfter(startOfWeek)) {
        hours += a.duration.hours || 0;
        minutes += a.duration.minutes || 0;
        if (!sports.includes(a.sport._id)) {
          sports.push(a.sport._id);
        }
      }
    });
    return { sports: sports.length, hours: getTime({ hours, minutes }, true) };
  };

  render() {
    const weeklyStats = this.weeklyStats();
    return (
      <LinearGradient colors={styles.gradients} style={{ flex: 1 }}>
        <Summary>
          <TextField>Olet urheillut tällä viikolla</TextField>
          <WeekTotal>{weeklyStats.hours}</WeekTotal>
          <TextField style={{ paddingBottom: 30 }}>{weeklyStats.sports} urheilulajia</TextField>
        </Summary>
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

const Summary = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20;
`;

const TextField = styled.Text`
  color: ${styles.colors.lightGray};
  font-family: AvenirLight;
  font-weight: 200;
  font-size: 19px;
`;

const WeekTotal = styled.Text`
  color: white;
  font-family: AvenirMedium;
  font-weight: 200;
  padding-top: 22;
  padding-bottom: 6;
  font-size: 49px;
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
