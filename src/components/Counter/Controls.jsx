import css from './Counter.module.css';

export function Controls({ onIncrement, onDecrement }) {
  <div className={css.Counter__controls}>
    <button type="button" onClick={this.handleIncrement}>
      Увеличить на 1
    </button>
    <button type="button" onClick={this.handleDecrement}>
      Уменьшить на 1
    </button>
  </div>;
}
