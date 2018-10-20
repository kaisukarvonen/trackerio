import { takeLatest, call, put } from "redux-saga/effects";
import { fetch } from "./api/sports";

const FETCH_SPORTS = "SPORTS/FETCH_SPORTS";
const FETCHED_SPORTS = "SPORTS/FETCHED_SPORTS";

export const fetchSports = () => ({
  type: FETCH_SPORTS
});
export const fetchedSports = sports => ({
  type: FETCHED_SPORTS,
  sports
});

const defaultState = { sports: [] };

export default function(state = defaultState, action) {
  switch (action.type) {
    case FETCHED_SPORTS:
      return { ...state, sports: action.sports };
    default:
      return { ...state };
  }
}

function* fetchSportsWorker() {
  try {
    const response = yield call(fetch);
    if (response.status === 200) {
      yield put(fetchedSports(response.data));
    } else {
    }
  } catch (e) {}
}

export const sportSagas = [takeLatest(FETCH_SPORTS, fetchSportsWorker)];
