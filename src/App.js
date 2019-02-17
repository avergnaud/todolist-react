import React, { Component } from "react";
import "./App.css";
import TodoContainer from "./TodoContainer";
import { AppProvider } from "./AppProvider";

class App extends Component {
  render() {
    return (
      <AppProvider>
        <TodoContainer />
      </AppProvider>
    );
  }
}

export default App;
