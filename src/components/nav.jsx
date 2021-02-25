import React, { memo } from "react";

const Nav = memo(({ onTotal }) => {
  return (
    <header className="nav">
      <div className="nav-left">
        <i className="fab fa-angellist"></i>
        <div className="nav-title ">
          Habit-tracker : Let's make it a habit🥰
        </div>
      </div>
      <div className="nav-sub">
        How many? : <strong className="nav-count">{onTotal}</strong>
      </div>
    </header>
  );
});

export default Nav;
