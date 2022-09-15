import React, { useState, useRef, useEffect } from "react";

const TodoForm = (props) => {
  const [input, setInput] = useState("");

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 100),
      text: input,
    });
    setInput("");
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="todo-form">
        <input
          onChange={handleChange}
          ref={inputRef}
          className="todo-input"
          type="text"
          placeholder="add new task"
          name="text"
        />
        <button className="todo-button">Add task</button>
      </form>
    </div>
  );
};

export default TodoForm;
