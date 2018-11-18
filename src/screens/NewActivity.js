import React, { Component } from 'react';
import { View, Picker } from 'react-native';
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
import BackButton from '../components/BackButton';
import { CustomTextInput } from '../elements/CustomTextInput';

class NewActivity extends Component {
  static navigationOptions = {
    headerRight: <View />,
    title: 'Lisää aktiviteetti',
    headerLeft: <BackButton />,
    ...styles.headerStyles
  };

  state = { description: '', place: '', sport: 0 };

  handleInput = (value, key) => {
    this.setState({
      [key]: value
    });
  };

  updateSport = sport => {
    this.setState({ sport });
  };

  render() {
    /* fields:
      x   description (text)
      x   place (text)
      x   sport (radio)
      duration (valmiit valinnat + vapaa kenttä)
      pvm (kalenteri)
      categories (+ radio + prosentti numero valinta 0-100 %)
    */
    return (
      <LinearGradient colors={styles.gradients} style={{ flex: 1 }}>
        <Form>
          <View>
            <Label>Urheilulaji</Label>
            <PickerWrapper>
              <CustomPicker selectedValue={this.state.sport} onValueChange={this.updateSport} placeholder={this.state.sport === 0}>
                <Picker.Item label="Valitse urheilulaji" value={0} />
                {this.props.sports.map(s => (
                  <Picker.Item label={s.name} value={s._id} />
                ))}
              </CustomPicker>
            </PickerWrapper>
          </View>
          <CustomTextInput
            placeholder="Kuvaus"
            label="Kuvaus"
            onChangeText={val => this.handleInput(val, 'description')}
            value={this.state.description}
          />
          <CustomTextInput
            placeholder="Paikka"
            label="Paikka"
            onChangeText={val => this.handleInput(val, 'place')}
            value={this.state.place}
          />
        </Form>
      </LinearGradient>
    );
  }
}

const Form = styled.View`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-evenly;
  padding-horizontal: 30;
`;

const Label = styled.Text`
  color: ${styles.colors.lightGray};
  font-family: AvenirLight;
  font-size: 16;
`;

const PickerWrapper = styled.View`
  border-bottom-width: 1;
  border-color: ${styles.colors.lightGray};
`;

const CustomPicker = styled.Picker`
  color: ${props => (props.placeholder ? '#79757a' : 'white')};
  font-family: AvenirLight;
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
)(NewActivity);
