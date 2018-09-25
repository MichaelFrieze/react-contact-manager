import React, { Component } from 'react';
import Contacts from './components/Contacts';
import Header from './components/Header';

// so here we have to import our provider
import { Provider } from './context';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      // now we have to wrap this single "App" div in the Provider
      <Provider>
        <div className="App">
          <Header branding="Contact Manager" />
          <div className="container">
            <Contacts />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
