import Habit from "./habit";
import React from "react";

const Habits = ({ habits, onIncrement, onDecrement, onDelete }) => {
  const handleIncrement = (habit) => {
    onIncrement(habit);
  };
  const handleDecrement = (habit) => {
    onDecrement(habit);
  };
  const handleDelete = (habit) => {
    onDelete(habit);
  };
  return (
    <ul className="habits">
      {habits.map((habit) => (
        <Habit
          key={habit.id}
          habit={habit}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          onDelete={handleDelete}
        />
      ))}
    </ul>
  );
};

export default Habits;
