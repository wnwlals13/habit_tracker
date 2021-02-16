import Habit from "./habit";
import InputForm from "./inputForm";

import React from "react";

const Habits = (props) => {
  const handleIncrement = (habit) => {
    props.onIncrement(habit);
  };
  const handleDecrement = (habit) => {
    props.onDecrement(habit);
  };
  const handleDelete = (habit) => {
    props.onDelete(habit);
  };
  const addhabitFunction = (name) => {
    props.onAdd(name);
  };
  const handleReset = () => {
    props.onReset();
  };
  return (
    <div>
      <InputForm onAdd={addhabitFunction} />
      <ul>
        {props.habits.map((habit) => (
          <Habit
            key={habit.id}
            habit={habit}
            onIncrement={handleIncrement}
            onDecrement={handleDecrement}
            onDelete={handleDelete}
            onAdd={addhabitFunction}
          />
        ))}
      </ul>
      <button className="reset" onClick={handleReset}>
        Reset All
      </button>
    </div>
  );
};

export default Habits;

// class Habits extends Component {
//   //react에서는 state를 직접적으로 수정하는건 좋지 않다.!!!! -> spread syntax

//   render() {
//     console.log("habits");
//   }
// }

// export default Habits;
