import React, { Component } from "react";
import TodoContainer from "./components/TodoContainer";
import { AppProvider } from "./components/AppProvider";
import InputForm from "./components/InputForm";

class App extends Component {
  render() {
    return (
      <AppProvider>
          <InputForm />
          <TodoContainer />
      </AppProvider>
    );
  }
}

export default App;
