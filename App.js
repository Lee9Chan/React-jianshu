import React, { Component } from 'react';
import { Globalstyle } from './style.js';
import { Provider } from 'react-redux';
import Header from './common/header';
import store from './store';
import { Iconstyle } from './statics/iconfont/iconfont.js';

class App extends Component {
  render() {
    return (
      <div>
        <Globalstyle />
        <Iconstyle />
        <Provider store={store}>
          <Header />
        </Provider>
      </div>
    );
  }
}

export default App;