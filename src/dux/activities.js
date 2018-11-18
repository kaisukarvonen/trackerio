import { takeLatest, call, put } from 'redux-saga/effects';
import { fetch } from './api/activities';

const FETCH_ACTIVITIES = 'ACTIVITIES/FETCH_ACTIVITIES';
const FETCHED_ACTIVITIES = 'ACTIVITIES/FETCHED_ACTIVITIES';

export const fetchActivities = userId => ({ type: FETCH_ACTIVITIES, userId });
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
    const response = yield call(fetch, action.userId);
    yield put(fetchedActivities(response.data));
  } catch (e) {}
}

export const activitySagas = [takeLatest(FETCH_ACTIVITIES, fetchActivitiesWorker)];
