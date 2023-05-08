import { Component } from 'react';
import { Counter } from './Counter/Counter';
import { Dropdown } from './Dropdown/Dropdown';
// импорт использован с реэкспортом (создан дополнительно файл index.js, в котором стоит экспорт)
import { ColorPicker } from './ColorPicker';
import { TodoList } from './TodoList';
import { Form } from './Form';
import colorPicker from './data/colorPicker.json';
import initialTodos from './data/todos.json';

// App сделан классом (для дальнейшего использования свойства state)
export class App extends Component {
  state = {
    todos: initialTodos,
  };

  // метод фильтрует массив initialTodos и создает новый массив объектов
  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };

  // Метод для получения данных из Form в App
  formSubmitHandler = data => {
    console.log('data', data);
  };

  render() {
    // деструктуриизация пропа для TodoList
    const { todos } = this.state;
    const completedTodoCount = todos.reduce(
      (acc, todo) => (todo.completed ? acc + 1 : acc),
      0
    );
    // console.log(completedTodoCount);

    return (
      <div>
        <h1>02 Формы</h1>
        <section>
          <Form onSabmitData={this.formSubmitHandler} />
        </section>

        <h1>01 Событие и сосотяние</h1>

        <section>
          <h2>TodoList</h2>
          <p>Общее кол-во: {todos.length} шт.</p>
          <p>Кол-во изученых: {completedTodoCount} шт.</p>
          <TodoList todos={todos} onDeleteTodo={this.deleteTodo} />
        </section>

        <section>
          <h2>ColorPicker</h2>
          <ColorPicker options={colorPicker} />
        </section>

        <section>
          <h2>Dropdown</h2>
          <Dropdown />
        </section>

        <section>
          <h2>Counter</h2>
          <Counter initialValue={39} />
          <Counter />
        </section>
      </div>
    );
  }
}

// // App сделан функцией
// export function App() {
//   return (
//     <div>
//       <h1>01 Событие и сосотяние</h1>

//       <section>
//         <h2>TodoList</h2>
//         <TodoList todos={'todos'} />
//       </section>

//       <section>
//         <h2>ColorPicker</h2>
//         <ColorPicker options={colorPicker} />
//       </section>

//       <section>
//         <h2>Dropdown</h2>
//         <Dropdown />
//       </section>

//       <section>
//         <h2>Counter</h2>
//         <Counter initialValue={39} />
//         <Counter />
//       </section>
//     </div>
//   );
// }
