// import PropTypes from 'prop-types';
import React from 'react';
import css from './Counter.module.css';

// класс Counter должен наследовать базовый компонент React.Component
export class Counter extends React.Component {
  // метод колбек функции для клика по кнопке "Увеличить на 1"
  handleIncrement = evt => {
    console.log('Больше');
    console.log(evt.target);

    // // использование асинхронной функции
    // setTimeout(() => {
    //   console.log('asynchron', evt.target);
    // }, 1000);
  };

  handleDecrement = () => {
    console.log('Меньше');
  };

  // render() - обязательный метод класса, который будет рендерить разметку
  // onClock={} - это слушатель события на кнопку
  render() {
    return (
      <div className={css.Counter}>
        <span className={css.Counter__value}>0</span>

        <div className={css.Counter__controls}>
          <button type="button" onClick={this.handleIncrement}>
            Увеличить на 1
          </button>
          <button type="button" onClick={this.handleDecrement}>
            Уменьшить на 1
          </button>
        </div>
      </div>
    );
  }
}
