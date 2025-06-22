import TodoItem from "./TodoItem";

function TodoItems({ todoItems, onDeleteItem }) {
  return (
    <div className="item-container">
      {todoItems.map((item) => (
        <TodoItem
          key={item.id}
          todoId={item.id}
          todoName={item.name}
          todoDate={item.dueDate}
          onDeleteItem={onDeleteItem}
        ></TodoItem>
      ))}
    </div>
  );
}
export default TodoItems;
