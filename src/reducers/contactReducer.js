const initialState = {};

export default function(state = initialState, action) {
  // we will evaluate actions by their type
  switch (action.type) {
    default:
      return state;
  }
}

// if you look in the redux dev tools you can see the state of contact

// this is because we created this contact reducer and brought it into our root reducer (index)

// if you go back to the index and changed the name from contact to contact1, you would see this change in the dev tools

// contact: {} is what shows up in dev tools. The empty object is the state of this contactReducer.

// initial state is empty so it represents that
/* 
const initialState = {
  test: "TEST"
};
 */

// this would change the empty object to { test: "TEST" } in the dev tools
