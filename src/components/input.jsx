import React, { memo } from "react";

const Input = memo(({ onSubmit }) => {
  const inputRef = React.createRef(); //함수 안이기 때문에 지역변수로 설정
  const formRef = React.createRef();
  const handleInput = (e) => {
    e.preventDefault();
    const text = inputRef.current.value;
    text && onSubmit(text);
    formRef.current.reset();
  };
  return (
    <form ref={formRef} className="inputForm" onSubmit={handleInput}>
      <input
        ref={inputRef}
        type="text"
        className="input"
        placeholder="Enter habit here"
      />
      <button className="inputBtn">Add</button>
    </form>
  );
});

export default Input;
