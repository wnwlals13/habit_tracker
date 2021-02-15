import "./app.css";
import Habits from "./components/habits";
import Navbar from "./components/navbar";
import InputForm from "./components/inputForm";
import Reset from "./components/reset";

import React, { Component } from "react";

class App extends Component {
  state = {
    // 배열 사용시 고유 key가 있어야 한다. -> 이 때, index는 사용하지 말기
    habits: [
      { id: 1, name: "Reading", count: 0 },
      { id: 2, name: "Running", count: 0 },
      { id: 3, name: "Coding", count: 0 },
    ],
    change: 0,
  };
  addhabitFunction = (data) => {
    let index = 4;
    const habits = this.state.habits.concat({
      id: index++,
      name: data,
      count: 0,
    });
    this.setState({ habits: habits });
  };
  plusFunction = (data) => {
    if (data.count > 0 && data.count < 2) {
      this.state.change = this.state.change + 1;
      this.setState({ change: this.state.change });
    }
  };
  minusFunction = (data) => {
    if (data.count == 0) {
      this.state.change = this.state.change - 1;
      this.setState({ change: this.state.change < 0 ? 0 : this.state.change });
    }
  };
  deleteFunction = (datas) => {
    const habits = [...this.state.habits];
    this.state.change = this.state.change - 1;
    this.setState({ habits: datas });
    this.setState({ change: this.state.change < 0 ? 0 : this.state.change });
  };
  resetAllFunction = () => {
    const habits = [...this.state.habits];
    this.setState({
      habits: habits.map((item) =>
        item.count > 0 ? { ...item, count: 0 } : item
      ),
    });
    this.setState({ change: 0 });
  };

  render() {
    return (
      <>
        <Navbar change={this.state.change} />
        <InputForm addhabitFunction={this.addhabitFunction} />
        <Habits
          habits={this.state.habits}
          plusFunction={this.plusFunction}
          minusFunction={this.minusFunction}
          deleteFunction={this.deleteFunction}
        />
        <Reset resetAllFunction={this.resetAllFunction} />
      </>
    );
  }
}

export default App;
