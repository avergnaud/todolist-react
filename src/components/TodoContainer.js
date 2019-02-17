import React, { Component } from "react";
import { TodoItem } from "./TodoItem";
import AppContext from "./contexte";

class TodoContainer extends Component {
  render() {
    return (
      <ul>
        <AppContext.Consumer>
          {context =>
            context.state.items.map(item => (
              <TodoItem key={item.id} item={item} />
            ))
          }
        </AppContext.Consumer>
      </ul>
    );
  }
}

export default TodoContainer;
