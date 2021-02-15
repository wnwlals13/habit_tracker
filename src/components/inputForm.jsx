import React, { Component } from "react";

class InputForm extends Component {
  handleSubmit = (event) => {
    event.preventDefault();
    this.props && this.props.addhabitFunction(event.target.habit.value);
  };
  render() {
    return (
      <>
        <form className="inputForm" onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="habit"
            className="inputText"
            placeholder="Habit"
          />
          <input type="submit" value="Add" className="inputAdd" />
        </form>
      </>
    );
  }
}

export default InputForm;
