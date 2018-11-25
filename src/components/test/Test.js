import React, { Component } from 'react';

class Test extends Component {
  state = {
    title: '',
    body: ''
  };

  componentDidMount() {
    // With fetch, you have to use .then because it returns a promise
    // We get the response and then we map it to json
    // then another .then and we get the data
    /*     
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json)); 
    */

    // usually we call the last part "data" and not json
    /* 
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(data => console.log(data));
    */
    // most of the time we would put this into our state
    // so lets go ahead and create a title and body in our state

    // now lets use state instead of console
    // we don't need arrow function because this is a lifecycle method
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then(response => response.json())
      .then(data =>
        this.setState({
          title: data.title,
          body: data.body
        })
      );
  }

  //comment out all of these life cycle methods
  /* 
  componentWillMount() {
    console.log('componentWillMount...');
  }

  componentDidUpdate() {
    console.log('componentDidUpdate...');
  }

  componentWillUpdate() {
    console.log('componentWillUpdate...');
  }

  componentWillReceiveProps(nextProps, nextState) {
    console.log('componentWillReceiveProps...');
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    return {
      test: 'something'
    };
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('getSnapshotBeforeUpdate...');
  }
 */
  render() {
    // lets use destructoring to pull the the body and title from the state
    const { title, body } = this.state;
    return (
      <div>
        <h1>{title}</h1>
        <p>{body}</p>
      </div>
    );
  }
}

export default Test;
