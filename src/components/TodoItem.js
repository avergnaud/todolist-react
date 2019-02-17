import React from "react";
import AppContext from './contexte';

export class TodoItem extends React.Component {
  render() {
    return (
      <AppContext.Consumer>
        {context => (
          <li>
            {this.props.item.content}
            <button
              onClick={e => {
                context.removeItem(e, this.props.item.id);
              }}
            >
              x
            </button>
          </li>
        )}
      </AppContext.Consumer>
    );
  }
}
