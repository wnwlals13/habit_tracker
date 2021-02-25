import React, { memo } from "react";

const Habit = memo(({ habit, onIncrement, onDecrement, onDelete }) => {
  const handleIncrement = () => {
    onIncrement(habit);
  };
  const handleDecrement = () => {
    onDecrement(habit);
  };
  const handleDelete = () => {
    onDelete(habit);
  };

  const { name, count } = habit;
  return (
    <li className="habit">
      <span className="habit-name">{name}</span>
      <span className="habit-count">{count}</span>

      <button className="habit-button habit-increase" onClick={handleIncrement}>
        <i class="far fa-plus-square"></i>
      </button>
      <button className="habit-button habit-decrease" onClick={handleDecrement}>
        <i class="far fa-minus-square"></i>
      </button>
      <button className="habit-button habit-delete" onClick={handleDelete}>
        <i class="fas fa-trash"></i>
      </button>
    </li>
  );
});

export default Habit;
