import React, { Component, Fragment } from "react";
import { render } from "react-dom";
import Header from './Header';

class App extends Component {
  render() {
    return (
        <Fragment>
            <Header />
        </Fragment>
    );
  }
}

const appDiv = document.getElementById("app");
render(<App />, appDiv);