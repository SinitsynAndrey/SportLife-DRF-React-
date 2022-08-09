import React, { Component, Fragment } from "react";
import { createRoot } from 'react-dom/client';

import Content from './Content';
import Header from './Header';

import { Provider } from 'react-redux';
import { store } from '../store'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Header />
        <Content />
      </Provider>
    );
  }
}

const appDiv = document.getElementById("app");
const root = createRoot(appDiv);
root.render(<App />);