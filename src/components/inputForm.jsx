import React, { memo } from "react";

const InputForm = memo((props) => {
  const formRef = React.createRef();
  const inputRef = React.createRef(); //Ref 호출

  const handleSubmit = (event) => {
    event.preventDefault(); //page reload stop
    const name = inputRef.current.value;
    name && props.onAdd(name);
    formRef.current.reset(); // = this.inputRef.current.value = "";
    // this.props && this.props.addhabitFunction(event.target.habit.value);
  };
  return (
    <form ref={formRef} className="inputForm" onSubmit={handleSubmit}>
      <input
        type="text"
        // name="habit"
        ref={inputRef}
        className="inputText"
        placeholder="Habit"
      />
      <input type="submit" value="Add" className="inputAdd" />
    </form>
  );
});

// export default InputForm;
// class InputForm extends PureComponent {
//   render() {
//     console.log("inputform");
//   }
// }

export default InputForm;
