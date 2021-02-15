import React, { Component } from "react";

class Reset extends Component {
  resetAll = () => {
    this.props.resetAllFunction();
  };
  render() {
    return (
      <button className="reset" onClick={this.resetAll}>
        Reset All
      </button>
    );
  }
}

export default Reset;
