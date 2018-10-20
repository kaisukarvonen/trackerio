import { authSagas } from "./auth";
import { activitySagas } from "./activities";
import { categorySagas } from "./categories";
import { sportSagas } from "./sports";

export default function* rootSaga() {
  yield [authSagas, activitySagas, categorySagas, sportSagas];
}
