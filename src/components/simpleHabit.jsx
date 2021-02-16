import React, {
  Component,
  useRef,
  useCallback,
  useState,
  useEffect,
} from "react";

const SimpleHabit = (props) => {
  const [count, setCount] = useState(0);
  const spanRef = useRef(); // =  React.createRef(); 1번만 만들고 재사용함.

  const handleIncrement = useCallback(() => {
    //주의해야할 점 이씀->나중에
    setCount(count + 1);
  });

  useEffect(() => {
    //componentDidMount & compoenentUpdate
    console.log(`mounted, update : ${count}`);
  }, []); //인자를 전달하지 않으면 인자가 변경될떄만 호출

  return (
    <li className="habit">
      <span ref={spanRef} className="habit-name">
        Reading
      </span>
      <span className="habit-count">{count}</span>
      <button className="habit-button habit-increase" onClick={handleIncrement}>
        <i className="fas fa-plus-square"></i>
      </button>
    </li>
  );
};

export default SimpleHabit;
