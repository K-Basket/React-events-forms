import css from './Counter.module.css';

// данный Controls вынесен в отдельный  файл для демонстрации метода "Подъем состояния"
export function Controls({ onIncrement, onDecrement }) {
  return (
    <div className={css.Counter__controls}>
      <button type="button" onClick={onIncrement}>
        Увеличить на 1
      </button>
      <button type="button" onClick={onDecrement}>
        Уменьшить на 1
      </button>
    </div>
  );
}
