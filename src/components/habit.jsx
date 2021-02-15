// rcc
// 클래스 이름은 대문자로 시작
import React, { Component } from "react";

class Habit extends Component {
  // javascript event와는 다른 react만의 Synthetic Event
  // handleIncrement = () => {
  //   // state 오브젝트안의 count 증가한 뒤 state 업데이트
  //   // this.state.cound++; -> 이렇게 업데이트하면 react는 몰라요
  //   // 꼭 state 변수를 업데이트 할 때에는, this.setState함수를 이용해야 한다.
  //   this.setState({ count: this.state.count + 1 });
  // };
  // handleDecrement = () => {
  //   const count = this.state.count - 1;
  //   this.setState({ count: count < 0 ? 0 : count });
  // };

  handleIncrement = () => {
    this.props.onIncrement(this.props.habit);
  };
  handleDecrement = () => {
    this.props.onDecrement(this.props.habit);
  };
  handleDelete = () => {
    this.props.onDelete(this.props.habit);
  };
  render() {
    const { name, count } = this.props.habit;
    return (
      <li className="habit">
        <span className="habit-name">{name}</span>
        <span className="habit-count">{count}</span>
        <button
          className="habit-button habit-increase"
          onClick={this.handleIncrement}
        >
          <i className="far fa-plus-square"></i>
        </button>
        <button
          className="habit-button habit-decrease"
          onClick={this.handleDecrement}
        >
          <i className="far fa-minus-square"></i>
        </button>
        <button
          className="habit-button habit-delete"
          onClick={this.handleDelete}
        >
          <i className="fas fa-trash"></i>
        </button>
      </li>
    );
  }
}

export default Habit;
