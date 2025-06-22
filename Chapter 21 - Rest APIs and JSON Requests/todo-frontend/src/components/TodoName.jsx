import styles from "./TodoName.module.css";

function TodoName() {
  return (
    <h1 className={styles.appName}>
      <span>Todo App</span>
    </h1>
  );
}

export default TodoName;
