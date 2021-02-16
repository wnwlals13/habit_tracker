import React, { memo } from "react";

const Navbar = memo((props) => {
  return (
    <header className="navbar">
      <i class="fas fa-leaf nav-icon"></i>
      <span className="nav nav-title">Habit Tracker</span>
      <span className="nav nav-count">{props.change}</span>
    </header>
  );
});

export default Navbar;
