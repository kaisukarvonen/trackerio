import { takeLatest, call, put } from "redux-saga/effects";
import { fetch } from "./api/activities";

const FETCH_CATEGORIES = "CATEGORIES/FETCH_CATEGORIES";
const FETCHED_CATEGORIES = "CATEGORIES/FETCHED_CATEGORIES";

export const fetchCategories = () => ({ type: FETCH_CATEGORIES });
export const fetchedCategories = categories => ({
  type: FETCHED_CATEGORIES,
  categories
});

const defaultState = { categories: [] };

export default function(state = defaultState, action) {
  switch (action.type) {
    case FETCHED_CATEGORIES:
      return { ...state, categories: action.categories };
    default:
      return { ...state };
  }
}

function* fetchCategoriesWorker() {
  try {
    const response = yield call(fetch);
    if (response.status === 200) {
      yield put(fetchedCategories(response.data));
    } else {
    }
  } catch (e) {}
}

export const categorySagas = [
  takeLatest(FETCH_CATEGORIES, fetchCategoriesWorker)
];
