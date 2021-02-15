import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <header className="navbar">
        <span className="nav nav-icon">
          <i class="fas fa-leaf"></i>
        </span>
        <span className="nav nav-title">Habit Tracker</span>
        <span className="nav nav-count">{this.props.change}</span>
      </header>
    );
  }
}

export default Navbar;
