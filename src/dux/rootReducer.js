import { combineReducers } from "redux";
import auth from "./auth";
import activities from "./activities";
import sports from "./sports";
import categories from "./categories";

const rootReducer = {
  sports,
  activities,
  categories,
  auth
};
export default rootReducer;
