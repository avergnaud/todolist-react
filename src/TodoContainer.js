import React, { Component } from "react";
import { TodoItem } from "./TodoItem";
import AppContext from "./contexte";

class TodoContainer extends Component {
  render() {
    return (
        <AppContext.Consumer>
          {context =>
            context.state.items.map(item => (
              <TodoItem item={item} />
            ))
          }
        </AppContext.Consumer>
    );
  }
}

export default TodoContainer;
