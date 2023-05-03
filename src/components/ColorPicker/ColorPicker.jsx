import React, { Component } from 'react';
import css from './ColorPicker.module.css';

export class ColorPicker extends Component {
  state = {
    activeOptionIndex: 0,
  };

  setActiveIndex = index => {
    this.setState({ activeOptionIndex: index });
  };

  // метод, который дописывает по условию дополнительный класс со стилями
  makeOptionClassName = index => {
    const optionClasses = [css.ColorPicker__option];

    if (index === this.state.activeOptionIndex) {
      optionClasses.push(css.ColorPicker__option_active);
    }

    return optionClasses.join(' ');
  };

  render() {
    const activeOption = this.props.options[this.state.activeOptionIndex];
    // console.log(activeOption);

    return (
      <div className={css.ColorPicker}>
        <p>Выбран цвет: {activeOption.label}</p>
        <div>
          {this.props.options.map(({ label, color }, index) => (
            <button
              key={label}
              className={this.makeOptionClassName(index)}
              style={{
                backgroundColor: color,
              }}
              onClick={() => this.setActiveIndex(index)}
            ></button>
          ))}
        </div>
      </div>
    );
  }
}
