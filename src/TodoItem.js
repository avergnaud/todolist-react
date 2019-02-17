import React from "react";

export class TodoItem extends React.Component {
  render() {
    return (
      <li>
        {this.props.itemContent}
        <button
          onClick={e => {
            this.props.removeMe(e, this.props.itemId);
          }}
        >
          x
        </button>
      </li>
    );
  }
}
