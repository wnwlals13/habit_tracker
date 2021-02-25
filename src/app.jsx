import { Component, useCallback, useState } from "react";
import "./app.css";
import Habits from "./components/habits";
import Input from "./components/input";
import Nav from "./components/nav";

import React from "react";

const App = (props) => {
  const [habits, setHabits] = useState([
    { id: 1, name: "Reading", count: 0 },
    { id: 2, name: "Running", count: 0 },
    { id: 3, name: "Eating", count: 0 },
  ]);
  const handleIncrement = useCallback((habit) => {
    setHabits((habits) =>
      habits.map((item) => {
        if (item.id === habit.id) {
          return { ...habit, count: habit.count + 1 };
        }
        return item;
      })
    );
  }, []);
  const handleDecrement = useCallback((habit) => {
    setHabits((habits) =>
      habits.map((item) => {
        if (item.id === habit.id) {
          const count = habit.count - 1;
          return { ...habit, count: count < 0 ? 0 : count };
        }
        return item;
      })
    );
  }, []);
  const handleDelete = useCallback((habit) => {
    setHabits((habits) => habits.filter((item) => item.id !== habit.id));
  }, []);
  const handleInput = useCallback((input) => {
    setHabits((habits) => [
      ...habits,
      { id: Date.now(), name: input, count: 0 },
    ]);
  }, []);
  const handleReset = useCallback(() => {
    setHabits((habits) =>
      habits.map((habit) => {
        if (habit.count != 0) {
          return { ...habit, count: 0 };
        }
        return habits;
      })
    );
  });
  return (
    <div>
      <Nav onTotal={habits.filter((item) => item.count > 0).length} />
      <Input onSubmit={handleInput} />
      <Habits
        habits={habits}
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
        onDelete={handleDelete}
      />
      <button className="reset" onClick={handleReset}>
        Reset All
      </button>
    </div>
  );
};

export default App;
