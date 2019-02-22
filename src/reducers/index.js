import { combineReducers } from "redux";
import contactReducer from "./contactReducer";

export default combineReducers({
  // the name contact is important
  contact: contactReducer
});
