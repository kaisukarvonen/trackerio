import { takeLatest, call, put } from "redux-saga/effects";
import { fetch } from "./api/activities";

const FETCH_ACTIVITIES = "ACTIVITIES/FETCH_ACTIVITIES";
const FETCHED_ACTIVITIES = "ACTIVITIES/FETCHED_ACTIVITIES";

export const fetchActivities = username => ({
  type: FETCH_ACTIVITIES,
  username
});
export const fetchedActivities = activities => ({
  type: FETCHED_ACTIVITIES,
  activities
});

const defaultState = { activities: [] };

export default function(state = defaultState, action) {
  switch (action.type) {
    case FETCHED_ACTIVITIES:
      return { ...state, activities: action.activities };
    default:
      return { ...state };
  }
}

function* fetchActivitiesWorker(action) {
  try {
    const response = yield call(fetch, action.username);
    if (response.status === 200) {
      yield put(fetchedActivities(response.data));
    } else {
    }
  } catch (e) {}
}

export const activitySagas = [
  takeLatest(FETCH_ACTIVITIES, fetchActivitiesWorker)
];
