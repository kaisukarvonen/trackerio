import { takeLatest, call, put } from 'redux-saga/effects';
import { login } from './api/auth';
import { AsyncStorage } from 'react-native';

const LOGGED_IN = 'AUTH/LOGGED_IN';
const LOG_IN = 'AUTH/LOG_IN';
const LOG_OUT = 'AUTH/LOG_OUT';

export const logIn = loginDetails => ({
  type: LOG_IN,
  loginDetails
});
export const loggedIn = user => ({
  type: LOGGED_IN,
  user
});
export const logout = () => ({
  type: LOG_OUT
});

const defaultState = { user: undefined };

export default function(state = defaultState, action) {
  switch (action.type) {
    case LOGGED_IN:
      return { ...state, user: action.user };
    case LOG_OUT:
      logOut();
      return { ...state, user: undefined };
    default:
      return { ...state };
  }
}

function* loginWorker(action) {
  try {
    console.log('trying to log in');
    const response = yield call(login, action.loginDetails);
    yield put(loggedIn(response.user));
    console.log('logged in!!!');
    setToken(response.token);
  } catch (e) {}
}

const setToken = async token => {
  await AsyncStorage.setItem('token', token);
};

const logOut = async () => {
  await AsyncStorage.removeItem('token');
};

export const authSagas = [takeLatest(LOG_IN, loginWorker)];
