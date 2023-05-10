import { List, Item, Text } from './styled';

export function TodoList({ todos, onDeleteTodo }) {
  return (
    <List>
      {todos.map(({ id, text, completed }) => (
        <Item key={id}>
          <Text>{`${text} (${completed})`}</Text>
          <button onClick={() => onDeleteTodo(id)}>Delete</button>
        </Item>
      ))}
    </List>
  );
}
