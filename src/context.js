import React, { Component } from 'react';

const Context = React.createContext();

// Everything we are doing here is obviously completely local
// later on we will implement http request on a back end using JSON Placeholder (Mock API)
const reducer = (state, action) => {
  console.log('This is state: ', state);
  console.log(' ');
  console.log('This is state contacts: ', state.contacts);
  console.log(' ');
  console.log('This is action: ', action);
  console.log(' ');
  console.log('This is action payload: ', action.payload);
  console.log(' ');

  switch (action.type) {
    case 'DELETE_CONTACT':
      return {
        ...state,
        contacts: state.contacts.filter(contact => contact.id !== action.payload)
      };

    // Lets create a new action type for adding
    // Now, we should be able to call our dispatch and get this
    case 'ADD_CONTACT':
      return {
        ...state, // spread is awesome when dealing with immutable state
        contacts: [action.payload, ...state.contacts] // the payload will be the entire contact
      };
    default:
      return state;
  }
};

export class Provider extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: 'John Doe',
        email: 'jdoe@gmail.com',
        phone: '555-555-5555'
      },
      {
        id: 2,
        name: 'Karen Williams',
        email: 'karen@gmail.com',
        phone: '222-222-2222'
      },
      {
        id: 3,
        name: 'Henry Johnson',
        email: 'henry@gmail.com',
        phone: '111-111-1111'
      }
    ],
    dispatch: action => this.setState(state => reducer(state, action))
  };

  render() {
    return <Context.Provider value={this.state}>{this.props.children}</Context.Provider>;
  }
}

export const Consumer = Context.Consumer;
