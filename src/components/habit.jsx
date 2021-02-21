// rcc
// 클래스 이름은 대문자로 시작
import React, { memo } from "react";

const Habit = memo((props) => {
  const handleIncrement = () => {
    props.onIncrement(props.habit);
  };
  const handleDecrement = () => {
    props.onDecrement(props.habit);
  };
  const handleDelete = () => {
    props.onDelete(props.habit);
  };
  const { name, count } = props.habit;
  return (
    <li className="habit">
      <span className="habit-name">{name}</span>
      <span className="habit-count">{count}</span>
      <button className="habit-button habit-increase" onClick={handleIncrement}>
        <i className="far fa-plus-square"></i>
      </button>
      <button className="habit-button habit-decrease" onClick={handleDecrement}>
        <i className="far fa-minus-square"></i>
      </button>
      <button className="habit-button habit-delete" onClick={handleDelete}>
        <i className="fas fa-trash"></i>
      </button>
    </li>
  );
});

export default Habit;

// class Habit extends PureComponent {
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

// LifeCycle Method
// componentDidMount() {
//   //컴포넌트가 UI 상에 등록이 되었을 때, 사용자에게 보여질 때 호출
//   console.log(`${this.props.habit.name} mounted`);
// }
// componentWillUnmount() {
//   //컴포넌트를 지우기 전에 호출
//   console.log(`${this.props.habit.name} will mounted`);
// }

//   render() {}
// }

// export default Habit;