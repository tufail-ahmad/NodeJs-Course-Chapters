import React, { useRef } from "react";
import { MdFormatListBulletedAdd } from "react-icons/md";

function AddTodo({ onNewItem }) {
  const todoNameElement = useRef();
  const todoDueDateElement = useRef();
  const handleAddTodo = (e) => {
    e.preventDefault();
    const todoName = todoNameElement.current.value;
    const todoDueDate = todoDueDateElement.current.value;
    if (todoName === "" || todoDueDate === "") {
      alert("Please enter a todo name and due date.");
      return;
    } else {
      onNewItem(todoName, todoDueDate);
      todoNameElement.current.value = "";
      todoDueDateElement.current.value = "";
    }
  };

  return (
    <div className="container text-center">
      <form className="row kg-row" onSubmit={handleAddTodo}>
        <div className="col-4">
          <input
            type="text"
            placeholder="Enter todo here..."
            className="form-control kg-input"
            ref={todoNameElement}
          />
        </div>
        <div className="col-4">
          <input
            type="date"
            className="form-control kg-input"
            ref={todoDueDateElement}
          />
        </div>
        <div className="col-2">
          <button className="btn btn-success kg-btn">
            <MdFormatListBulletedAdd className="kg-icon" />
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;
