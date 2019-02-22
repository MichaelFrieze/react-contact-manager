// This is a meeting place for all of our reducers
// there will often times be more reducers in this directory
import { combineReducers } from "redux";
import contactReducer from "./contactReducer";

export default combineReducers({
  contact: contactReducer
  // this name contact is important
  // when we bring in our state from redux into a component, this will be available in the this.props
  // So, this.props.contact
});
