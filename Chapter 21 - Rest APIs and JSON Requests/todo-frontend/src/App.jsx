import TodoName from "./components/TodoName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import WelcomeMsg from "./components/WelcomeMsg";
import "./App.css";
import { useState } from "react";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  const handleAddTodo = (todoName, todoDueDate) => {
    const newTodo = {
      id: Math.floor(Math.random() * 1000),
      name: todoName,
      dueDate: todoDueDate,
    };
    setTodoItems((prevTodoItems) => [...prevTodoItems, newTodo]);
  };
  const handleDeleteTodo = (todoId) => {
    const newTodoItems = todoItems.filter((item) => item.id !== todoId);
    setTodoItems(newTodoItems);
  };

  return (
    <center>
      <TodoName />
      <AddTodo onNewItem={handleAddTodo} />
      {todoItems.length === 0 && <WelcomeMsg></WelcomeMsg>}
      <TodoItems
        todoItems={todoItems}
        onDeleteItem={handleDeleteTodo}
      ></TodoItems>
    </center>
  );
}

export default App;
