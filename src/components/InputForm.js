import React, { Component } from "react";
import AppContext from "./contexte";

class InputForm extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    return (
      <AppContext.Consumer>
        {context => (
          <React.Fragment>
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
            />
            <button
              onClick={e => {
                context.addItem(e, this.state.value);
              }}
            >
              ajouter
            </button>
          </React.Fragment>
        )}
      </AppContext.Consumer>
    );
  }
}

export default InputForm;
