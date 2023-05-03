import { Counter } from './Counter/Counter';

export const App = () => {
  return (
    <div>
      <h1>Счетчик</h1>
      <Counter initialValue={49} />
      <Counter />
    </div>
  );
};
