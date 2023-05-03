// import PropTypes from 'prop-types';
import React from 'react';
import css from './Counter.module.css';
import { Controls } from './Controls';

// класс Counter должен наследовать базовый компонент React.Component
export class Counter extends React.Component {
  // передаем дефолтные значения для пропа initialValue
  static defaultProps = {
    initialValue: 0,
  };

  // для передачи propTypes
  static propTypes = {
    //
  };

  // объявляем состояние для хранения каких-то данных для их переиспользования. constructor() - классика (уже не используется), state = {} -  компиллированный React
  // constructor() {
  //   // super() - это вызов конструктора родителя
  //   super();
  //   // this.state - должен обязательно так называться, и в нем должен лежать объект, а внутрии может быть все что угодно, кроме методов(функций)
  //   this.state = {
  //     value: 0,
  //   };
  // }
  state = {
    // задаем стартовое значение
    // value: 39,

    // стартотвое значение пропа, переданного из пропа в App
    value: this.props.initialValue,
  };

  // метод колбек функции для клика по кнопке "Увеличить на 1"
  handleIncrement = () => {
    // this.state.value = 15; // Так делать нельзя!!!!!!!!!!!!!!!!!!!!!!!!

    // setState() - метод обновляет состояние данных и имеет два варианта обновления:

    // 1. Вариант: setState({value: 59}) - перезаписывает значение свойства value на новое
    // this.setState({
    //   value: 59,
    // });

    // 2. Варииант: setState(() => {}) берет значение из переменной и модифицирует его внутри функции
    this.setState(valState => {
      return {
        value: valState.value + 1,
      };
    });
  };

  handleDecrement = () => {
    this.setState(valState => {
      return {
        value: valState.value - 1,
      };
    });
  };

  // render() - обязательный метод класса, который будет рендерить разметку
  // onClick={} - это слушатель события на кнопку
  render() {
    return (
      <div className={css.Counter}>
        <span className={css.Counter__value}>{this.state.value}</span>

        <Controls
          onDecrement={this.handleDecrement}
          onIncrement={this.handleIncrement}
        />

        {/* <div className={css.Counter__controls}>
          <button type="button" onClick={this.handleIncrement}>
            Увеличить на 1
          </button>
          <button type="button" onClick={this.handleDecrement}>
            Уменьшить на 1
          </button>
        </div> */}
      </div>
    );
  }
}
