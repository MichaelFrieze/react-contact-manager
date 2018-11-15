import React, { Component } from 'react';

class Test extends Component {
  state = {
    title: '',
    body: ''
  };

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
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
    return (
      <div>
        <h1>Test Component</h1>
      </div>
    );
  }
}

export default Test;
