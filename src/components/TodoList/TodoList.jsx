import css from './TodoList.module.css';

export function TodoList({ todos, onDeleteTodo }) {
  return (
    <ul className={css.TodoList}>
      {todos.map(({ id, text, completed }) => (
        <li className={css.TodoList__item} key={id}>
          <p className={css.TodoList__text}>{`${text} (${completed})`}</p>
          <button onClick={() => onDeleteTodo(id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}
