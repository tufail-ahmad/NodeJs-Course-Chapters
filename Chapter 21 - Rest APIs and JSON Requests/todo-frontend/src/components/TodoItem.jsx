import { MdDeleteOutline } from "react-icons/md";

function TodoItem({ todoId, todoName, todoDate, onDeleteItem }) {
  return (
    <div className="container text-center">
      <div className="row kg-row">
        <div className="col-4">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger kg-btn"
            onClick={() => onDeleteItem(todoId)}
          >
            <MdDeleteOutline className="kg-icon" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
