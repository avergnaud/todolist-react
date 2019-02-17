import React, { Component } from "react";
import AppContext from "./contexte";

export class AppProvider extends Component {
  state = {
    items: [
      { id: "1", content: "faire ceci" },
      { id: "2", content: "faire cela" }
    ]
  };

  removeItem = (event, itemId) => {
    //do with event
    console.log(itemId);

    this.setState({
      items: this.state.items.filter(item => item.id !== itemId)
    });
  };

  render() {
    const { children } = this.props;
    return (
      <AppContext.Provider
        value={{
          state: this.state,
          removeItem: this.removeItem
        }}
      >
        {children}
      </AppContext.Provider>
    );
  }
}
