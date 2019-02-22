import { createStore, applyMiddleware, compose } from "redux";
// createStore initializes a store
// applyMiddleware is for thunk
// compose allows us to do more than one things
import thunk from "redux-thunk";
import rootReducer from "./reducers";
// we are going to have a folder called reducers that contains a index.js

const initialState = {};
// initial sate is just an empty object for now

const middleware = [thunk];
// the array allows us to have even more middleware than just thunk if desired

// window is used to support redux dev tools in the browser
// find this line at: https://github.com/zalmoxisus/redux-devtools-extension#usage
// we are using spread operator for middleware because it is an array
const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
