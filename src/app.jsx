import "./app.css";
import Habits from "./components/habits";
import Navbar from "./components/navbar";
import Reset from "./components/reset";

import React, { useCallback, useState } from "react";

const App = (props) => {
  // state = {
  //   // 배열 사용시 고유 key가 있어야 한다. -> 이 때, index는 사용하지 말기
  //   habits: [],
  // };
  const [habits, setHabits] = useState([
    { id: 1, name: "Reading", count: 0 },
    { id: 2, name: "Running", count: 0 },
    { id: 3, name: "Coding", count: 0 },
  ]);

  const handleIncrement = useCallback((habit) => {
    // const habits = [...this.state.habits]; //복사
    // const index = habits.indexOf(habit);
    // habits[index].count++;
    // this.setState({ habits: habits });
    // PureComponent
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
    // const habits = [...this.state.habits];
    // const index = habits.indexOf(habit);
    // const count = habits[index].count - 1;
    // habits[index].count = count < 0 ? 0 : count;
    // this.setState({ habits: habits });
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
  const addhabitFunction = useCallback((name) => {
    setHabits((habits) => [...habits, { id: Date.now(), name, count: 0 }]);
  }, []);
  const handleReset = () => {
    setHabits((habits) =>
      habits.map((habit) => {
        if (habit.count > 0) {
          return { ...habit, count: 0 };
        }
        return habit;
      })
    );
  };
  return (
    <div>
      <Navbar change={habits.filter((item) => item.count > 0).length} />
      <Habits
        habits={habits}
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
        onDelete={handleDelete}
        onAdd={addhabitFunction}
        onReset={handleReset}
      />
    </div>
  );
};

export default App;

// class App extends Component {
//   render() {
//     console.log("app");
//   }
// }

// export default App;

// mine
// addhabitFunction = (data) => {
//   let index = 4;
//   const habits = habits.concat({
//     id: index++,
//     name: data,
//     count: 0,
//   });
//   this.setState({ habits: habits });
// };
// plusFunction = (data) => {
//   if (data.count > 0 && data.count < 2) {
//     this.state.change = this.state.change + 1;
//     this.setState({ change: this.state.change });
//   }
// };
// minusFunction = (data) => {
//   if (data.count == 0) {
//     this.state.change = this.state.change - 1;
//     this.setState({ change: this.state.change < 0 ? 0 : this.state.change });
//   }
// };
// deleteFunction = (datas) => {
//   const habits = [...this.state.habits];
//   this.state.change = this.state.change - 1;
//   this.setState({ habits: datas });
//   this.setState({ change: this.state.change < 0 ? 0 : this.state.change });
// };
// resetAllFunction = () => {
//   const habits = [...this.state.habits];
//   this.setState({
//     habits: habits.map((item) =>
//       item.count > 0 ? { ...item, count: 0 } : item
//     ),
//   });
//   this.setState({ change: 0 });
// };
