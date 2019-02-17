import React, { Component } from 'react';
import { createContext } from 'react';

const AppContext = createContext();

class AppProvider extends Component {
    state = {
      items: [{id:"1", content:"faire ceci"}, {id:"2", content:"faire cela"}]
    }

    removeItem = (event, someParameter) => {
      //do with event
      console.log(someParameter)
    }

    render() {
      const { children } = this.props;
      return (
        <AppContext.Provider
          value={{
            state: this.state,
            removeItem: this.removeItem,
          }}
        >
          { children }
        </AppContext.Provider>
      );
    }
  }