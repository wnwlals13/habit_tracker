import React, { Component } from "react";
import Habit from "./habit";

class Habits extends Component {
  //react에서는 state를 직접적으로 수정하는건 좋지 않다.!!!! -> spread syntax
  handleIncrement = (habit) => {
    // mine
    // this.state.habits.forEach((item) => {
    //   if (item.name === habit.name) {
    //     item.count = item.count + 1;
    //     this.setState({ count: item.count });
    //   }
    // });
    const habits = [...this.props.habits]; //복사
    const index = habits.indexOf(habit);
    habits[index].count++;
    this.setState({ habits: habits }); // = {habits}
    this.props.plusFunction(habits[index]);
  };
  handleDecrement = (habit) => {
    const habits = [...this.props.habits];
    const index = habits.indexOf(habit);
    const count = habits[index].count - 1;
    habits[index].count = count < 0 ? 0 : count;
    this.setState({ habits: habits });
    this.props.minusFunction(habits[index]);
  };
  handleDelete = (habit) => {
    const habits = this.props.habits.filter((item) => item.id !== habit.id);
    // const index = habits.indexOf(habit);
    // habits.splice(index, 1);
    this.setState({ habits: habits });
    this.props.deleteFunction(habits);
  };
  render() {
    return (
      <>
        <ul>
          {this.props.habits.map((habit) => (
            <Habit
              key={habit.id}
              habit={habit}
              onIncrement={this.handleIncrement}
              onDecrement={this.handleDecrement}
              onDelete={this.handleDelete}
            />
          ))}
        </ul>
      </>
    );
  }
}

export default Habits;
