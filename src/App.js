import React, { Component } from 'react';
import './App.css';
import { TodoItem } from "./TodoItem"

class App extends Component {

  constructor() {
    super()
    this.sate = {
      items: [{id:"1", content:"faire ceci"}, {id:"2", content:"faire cela"}]
    }
  }

  removeItem = (event, someParameter) => {
    //do with event
    console.log(someParameter)
  }

  render() {
    return (
      <React.Fragment>
        <TodoItem itemId="1" itemContent="faire ceci" removeMe={this.removeItem} />
        <TodoItem itemId="2" itemContent="faire cela" removeMe={this.removeItem} />
      </React.Fragment>
    );
  }
}

export default App;
