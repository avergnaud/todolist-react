import React, { Component } from "react";
import AppContext from "./contexte";
const uuidv4 = require('uuid/v4');

export class AppProvider extends Component {
  state = {
    items: [
      { id: uuidv4(), content: "faire ceci" },
      { id: uuidv4(), content: "faire cela" }
    ]
  };

  removeItem = (event, itemId) => {
    this.setState({
      items: this.state.items.filter(item => item.id !== itemId)
    });
  };

  addItem = (event, itemContent) => {
    const items = this.state.items
    items.push({ id: uuidv4(), content: itemContent });
    this.setState({
      items
    });
  };

  render() {
    return (
      <AppContext.Provider
        value={{
          state: this.state,
          removeItem: this.removeItem,
          addItem: this.addItem
        }}
      >
        {this.props.children}
      </AppContext.Provider>
    );
  }
}
