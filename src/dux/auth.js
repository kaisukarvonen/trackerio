import { takeLatest, call, put } from "redux-saga/effects";

const LOGGED_IN = "AUTH/LOGGED_IN";
const LOG_IN = "AUTH/LOG_IN";
const LOG_OUT = "AUTH/LOG_OUT";

export const login = (username, password) => ({
  type: LOG_IN,
  username,
  password
});
export const loggedIn = (user) => ({
  type: LOGGED_IN,
  user,
});
export const logout = () => ({
  type: LOG_OUT,
});

const defaultState = { loggedIn: false, user: undefined };

export default function(state = defaultState, action) {
  switch (action.type) {
    case LOGGED_IN:
      return { ...state, loggedIn: true, user: action.user };
    case LOG_OUT:
      return { ...state, loggedIn: false, user: undefined };
    default:
      return { ...state };
  }
}

function* loginWorker(action) {
  yield put(loggedIn(action.username));
  // try {
  //   const response = yield call();
  //   if (response.status === 200) {

  //   } else {
  //   }
  // } catch (e) {
  // }
}

export const authSagas = [takeLatest(LOG_IN, loginWorker)];
